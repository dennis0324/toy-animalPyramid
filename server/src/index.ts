import { FireBase } from './firestore'
import { initializeSocket } from "./socket-io";

export async function runServer(){
  const firebase = new FireBase()
  const socketManager = new initializeSocket(firebase)
  socketManager.listen(3000);
}
