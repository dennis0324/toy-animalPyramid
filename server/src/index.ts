import { createServer } from "http"
import { Server, Socket } from 'socket.io'
import { FireBase,createUserWithEmailAndPassword } from './firestore'
import { ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore"; 

// async function writeUserData(id:string,password:string) {
//   const db = getDatabase();
//   const docRef = await addDoc(collection(db, "users"), {
//     id:id,
//     password:password
//   });
// }

export async function runServer(){
  const httpServer = createServer()
  const firebase = new FireBase()
  // await writeUserData('test','test')
  const io = new Server(httpServer,{
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true
    }
  })

  /**
   * this is for admin
   */
  io.of('admin').on("connection",(socket:Socket) => {
    
    // console.log("connected",socket.id,)
    // socket.on('PutHorse',(i) => {
    //   console.log("putHorse",i)
    // })
  
  })

  /**
   * this is for user
   */
  io.of('/user').on('connection',(socket:Socket) => {
    console.log(socket.id)
    socket.on('auth',async (data:any) => {
      const auth = firebase.getAuth()
      try{
        await createUserWithEmailAndPassword(auth,(data as any).email,(data as any).password)

        //TODO: create auth interface
        socket.emit('auth',{data:{
          message:'success'
        }})

      }
      catch(err){
        switch (err.code) {
          case 'auth/weak-password':
          case 'auth/invalid-email':
          case 'auth/email-already-in-use':
          case 'auth/admin-restricted-operation':
            socket.emit('auth',{
              data:{
                message:err.code
              }
            })
            break;
        }
      }

    })

    socket.on('test',() => {
      console.log('tes')
      socket.emit('test')
    })

  })




  io.listen(3000);
}
