import { type Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export default function Button({socket}: {socket: Socket<DefaultEventsMap, DefaultEventsMap>}){
  function putHorse(){
    console.log(socket)
    socket.emit('PutHorse',{x:1,y:1})
  }

  return <button onClick={putHorse}>Click me</button>
}