import { createServer } from "http"
import { Server, Socket } from 'socket.io'



export function runServer(){
  const httpServer = createServer()
  const io = new Server(httpServer)

  io.on("connection",(socket:Socket) => {
    
    console.log("connected",socket.id)
  })

  io.listen(3000);
}
