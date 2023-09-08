import { Props } from "@animal/types";
import { useState } from "react";
import './button.css'

export default function UserInput(props:Props){
  const [showError, setShowError] = useState(false)
  
  function start(){
    if(props.nickname === ''){
      setShowError(true)
      return 
    }
    const socket = props.manager.getAuth().emit('nicknameExist',{nickname:props.nickname})
    socket.on('nicknameExist', (data:any[]) => {
      if((data as any).ids.length === 0){
        console.log('user')
        props.setLoginState('userSelect')
      }
      else{
        console.log('login')
        props.setEmail((data as any).ids[0].email)
        props.setLoginState('login')
      }
    })
  }

  return (
    <div className="flex flex-col starDust">
      <div className="text-xs">
        유저닉
      </div>
      <input className="mt-1 mb-2" type="text" placeholder="Username" onChange={e => props.setNickname(e.target.value)}/>
      <div style={{color:'#ff6363',opacity:(showError) ? '1' : '0'}}>need to fill nickname</div>
      
      <div className="grid gap-4">
        <button type="button" className="wobbleBtn" onClick={start}>
          <span className="label ">start</span>
        </button>
      </div>

      <div className="attribute flex justify-center">
        <button onClick={e => props.setLoginState('openSource')}>OpenSource</button>
      </div>
    </div>
  )
}

