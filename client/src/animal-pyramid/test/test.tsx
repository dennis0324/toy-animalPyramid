import Button from "../button";
import { type Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export default function Test({socket}: {socket: Socket<DefaultEventsMap, DefaultEventsMap>}){
  return (
    <div>
      <Button socket={socket}/>
    </div>
  )
}