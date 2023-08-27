import { AnimalPyramidSocket } from "@src/socket";
import { Socket } from "socket.io";
import { Manager } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface Props {
  manager:AnimalPyramidSocket
}