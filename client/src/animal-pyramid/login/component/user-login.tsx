import { Props } from "@animal/types";
import BackBtn from "@src/animal-pyramid/common/back-button";
import Btn from "@src/animal-pyramid/common/normal-button";
import { useEffect, useState } from "react";

export default function UserLogin(props:Props){
  const [password,setPassword] = useState('')
  const [ID,setID] = useState('')

  useEffect(() => {
    setID(props.nickname ?? '')
  },[])

  function back(){
    props.setNickname('')
    props.setLoginState('anonymous')
  }

  function login(){
    console.log(password)
    props.manager.getAuth().emit("login",{id:ID,password:password})
    // signInWithEmailAndPassword
    
  }
  return (
    <div className="flex flex-col starDust">
      <div className="flex place-items-center justify-between mb-4">
        <button onClick={back}>
          <BackBtn size={30}/>
        </button>

        <span className="text-xl">Login</span>
        <div style={{width:'30px'}}></div>
      </div>

      <div className="flex flex-col mt-4 px-4">
        <span className="text-xs">
          Email / Username
        </span>
        <input className="mt-1 mb-2" type="text" placeholder="ID" defaultValue={props.nickname ?? ''} onChange={e => setID(e.target.value)}/>
        <span className="text-xs">Password</span>
        <input 
          className="mt-1 mb-2" 
          type="password" 
          placeholder="Password" 
          onChange={e => setPassword(e.target.value)}
        />
        <div className="flex justify-center" onClick={login}>
          <Btn text="Login" />
        </div>
      </div>
      <div className="attribute flex justify-center">
        <a href="https://iconscout.com/icons/back-arrow"  target="_blank">Free Back Arrow Icon</a> by <a href="https://iconscout.com/contributors/eva-icons" target="_blank">Akveo</a>
      </div>
    </div>
  )
}

