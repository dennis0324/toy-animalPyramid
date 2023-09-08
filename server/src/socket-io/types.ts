import { Socket } from "socket.io"
import { FireBase } from "src/firestore"

export type SocketEvent = {
  event:String,
  execute:(socket:Socket,firebase:FireBase,data:any) => Promise<void>
}

export type SocketEvents = {
  [key:string]:SocketEvent
}