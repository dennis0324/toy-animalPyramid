import { AnimalPyramidSocket } from "@src/socket";
import { Socket } from "socket.io";
import { Manager } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";


export type LoginState = "anonymous"|"login"|"register"|"forgotPassword"|"userSelect"|"openSource"

export interface Props {
  manager:AnimalPyramidSocket,
  nickname?:string,
  email?:string,
  setNickname?:React.Dispatch<React.SetStateAction<string>>,
  setEmail?:React.Dispatch<React.SetStateAction<string>>,
  setLoginState?:React.Dispatch<React.SetStateAction<LoginState>>,

}