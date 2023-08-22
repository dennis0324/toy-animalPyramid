import { Manager } from "socket.io-client";

const manager = new Manager("localhost:3000", {
  reconnectionDelayMax: 10000,
});

const socket = manager.socket("/", {
});
