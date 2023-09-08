import { Socket } from "socket.io"
import { FireBase, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../../firestore"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { SocketEvent } from "../types"

export const login:SocketEvent = {
  event:`login`,
  execute:async (socket:Socket,firebase:FireBase,data:any) => {
    console.log(data)
    if(data.id.includes('@')){
      // login as email
      const isLogin = signInWithEmailAndPassword(firebase.getAuth(),(data as any).id,(data as any).password)
      if(isLogin) console.log('login')
    }
    else{
      // login as username
      const store = firebase.getFireStore()
      const qr = query(collection(store,'users'),where('nickname','==',data.id))
      const tr = await getDocs(qr)
      const IDs:any[] = []
      tr.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        IDs.push(doc.data())
      });
      console.log(IDs[0].email)
      const isLogin = signInWithEmailAndPassword(firebase.getAuth(),IDs[0].email,(data as any).password)
      if(isLogin) console.log('login')
    }
  }
}