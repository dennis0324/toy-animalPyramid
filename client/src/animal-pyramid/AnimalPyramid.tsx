import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Test from "./test/test";
import { useEffect, useState } from "react";
import { Manager, Socket } from "socket.io-client";
import { AnimalPyramidSocket } from "@src/socket";
import LoginPage from "./login";
export default function AnimalPyramid(){

  // const manager= new Manager("ws://localhost:3000", {
  //   reconnectionDelayMax: 10000,
  // });

  // const socket = manager.socket("/user");

  // socket.on("connect", () => {
  //   socket.emit('test')
  //   socket.on('auth', (data)=>{
  //     console.log(data)
  //   })
  //   socket.on('test',()=>{
  //     console.log('test')
  //   })
  // })
  const Manager = new AnimalPyramidSocket()

  const props={
    manager:Manager
  }

  return (
    <div>
      <LoginPage {...props}/>
    </div>
  )
}