import { Manager, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export class AnimalPyramidSocket {
  private manager: Manager<DefaultEventsMap, DefaultEventsMap>;

  constructor() {
    // const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
      this.manager = new Manager("ws://localhost:3000", {
      reconnectionDelayMax: 10000,
    });
  }

  public getUser() {
    if(!this.manager) return;
    const socket = this.manager.socket("/user");
    return socket
  }

  public setEvent(socket:Socket<DefaultEventsMap, DefaultEventsMap>,funcArray:Function[]){
    funcArray.forEach((func) => {
      socket.on(func.name, () => func())
    })
  }

  public deleteEvent(){

  }
}