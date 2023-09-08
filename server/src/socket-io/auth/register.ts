import { Socket } from "socket.io"
import { FireBase, createUserWithEmailAndPassword } from "../../firestore"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { SocketEvent } from "../types"

export const nicknameExist:SocketEvent = {
  event:`nicknameExist`,
  execute:async (socket:Socket,firebase:FireBase,data:any) => {
    console.log(data)
    const store = firebase.getFireStore()
    const qr = query(collection(store,'users'),where('nickname','==',data.nickname))
    const tr = await getDocs(qr)
    // socket.send({data:tr})
    const IDs:any[] = []
    tr.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      IDs.push(doc.data())
      // console.log(doc.id, " => ", doc.data());
    });
    console.log(IDs)
    socket.emit('nicknameExist',{ids:IDs})
  }
}

export const register:SocketEvent = {
  event:`register`,
  execute:async (socket:Socket,firebase:FireBase,data:any) => {
    console.log('regis')
    const auth = firebase.getAuth()
      try{
        await createUserWithEmailAndPassword(auth,(data as any).email,(data as any).password)
        const db = firebase.getFireStore()
        const docRef = await addDoc(collection(db, "users"), {
          email:(data as any).email,
          nickname:(data as any).nickname,
        });
        //TODO: create auth interface
        socket.emit('register',{data:{
          message:'success'
        }})

      }
      catch(err){
        console.log(err)
        switch (err.code) {
          case 'auth/weak-password':
          case 'auth/invalid-email':
          case 'auth/email-already-in-use':
          case 'auth/admin-restricted-operation':
            socket.emit('register',{
              data:{
                message:err.code
              }
            })
            break;
        }
      }
  }
}