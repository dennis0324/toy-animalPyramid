import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Test from "./test/test";
import { useEffect, useState } from "react";
import { Manager, Socket } from "socket.io-client";
export default function AnimalPyramid(){

  // const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const manager = new Manager("localhost:3000", {
    reconnectionDelayMax: 10000,
  });
  
  const socket = manager.socket("/");
  // setSocket(socket)

  return (
    <div>
      <Test socket={socket}/>
    </div>
  )
}