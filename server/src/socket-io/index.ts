import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import path from 'path'
import fs from 'fs'
import { SocketEvents } from './types'
import { FireBase } from 'src/firestore'

export class initializeSocket{
  private io:Server
  constructor(private firebase:FireBase){
    const httpServer = createServer()
    this.io = new Server(httpServer,{
      cors: {
        origin: /localhost:517[0-9]/,
        methods: ["GET", "POST"],
        credentials: true
      }
    })
    this._setEvents()
  }

  _setEvents(){
    // getting directory list
    const directoryInfos = fs.readdirSync(
      path.join(process.cwd(),'src','socket-io'),
      { withFileTypes: true }
    ).filter(file => file.isDirectory())
    directoryInfos.forEach((directoryInfo) => {
      try{
        const socketEvents:SocketEvents = require(path.join(directoryInfo.path,directoryInfo.name))
        if(!socketEvents) return
        this.io.of(directoryInfo.name).on('connection',(socket:Socket) => {
          console.log('connected server ' + directoryInfo.name)
          Object.entries(socketEvents).forEach(([key,socketEvent]) => {
            socket.on(key,(data) => socketEvent.execute(socket,this.firebase,data))
          })
        })

      }
      catch(e){
        throw new Error(e)
      }
    })
  }

  listen(port=3000) {
    this.io.listen(port)
  }

}