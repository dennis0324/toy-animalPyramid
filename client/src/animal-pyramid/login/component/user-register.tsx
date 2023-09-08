import { Props } from "@animal/types"
import BackBtn from "@src/animal-pyramid/common/back-button"
import Btn from "@src/animal-pyramid/common/normal-button"
import { AuthReturn } from "@src/socket/types"
import { useEffect, useState } from "react"
import { register } from "ts-node"

export default function UserRegister(props:Props){
  const initialState ={
    email: "",
    password: "",
    cpassword: '',
  }

  const initialState2 ={
    email: "",
    password: "",
    cpassword: '',
  }
  // login property
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [nickname, setNickname] = useState("")
  
  // button property
  const [isDisabled, setIsDisabled] = useState(false)


  const [message, setMessage] = useState(initialState)


  function showMessage(type:'email'|'password'|'cpassword', msg:string){
    message[type] = msg
    setMessage({...message})
  }


  function auth({data}:AuthReturn){
    switch(data.message){
      case 'auth/weak-password':
        showMessage('password','비밀번호가 너무 약합니다.')
        break;
      case 'auth/invalid-email':
        showMessage('email','이메일 형식이 올바르지 않습니다.')
        break;
      case 'auth/email-already-in-use':
        break;
      case 'auth/admin-restricted-operation': 
        break;
    }

    // enable button
    setIsDisabled(false)
    props.setLoginState('login')
  }

  function back(){
    props.setLoginState('userSelect')
  }

  
  const user = props.manager.getAuth()
  
  function changeValue(e:React.ChangeEvent<HTMLInputElement>){
    switch(e.target.getAttribute('data-type')){
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
      case "cpassword":
        setConfirmPassword(e.target.value)
        break;
      case "nickname":
        setNickname(e.target.value)
        break;
    }
  }

  function submit(){
    showMessage('email','')
    showMessage('password','')
    showMessage('cpassword','')
    // disable button
    setIsDisabled(true)

    if(email === ""){
      console.log('ddd')
      showMessage('email','이메일을 입력해주세요')
    }
    if(password === ""){
      showMessage('password','비밀번호를 입력해주세요')
    }
    if(confirmPassword === ""){
      showMessage('cpassword','비밀번호를 입력해주세요')
    }
    
    if(confirmPassword !== password){
      showMessage('password','비밀번호가 일치하지 않습니다.')
      showMessage('cpassword','비밀번호가 일치하지 않습니다.')
      return
    }
    if([password,email,confirmPassword].includes("")) return 

    console.log("submit")
    const returnSocket = user.emit('register',{
      email,
      password,
      nickname:props.nickname
    })
    returnSocket.on('register',auth)
  }

  return (
    <div className="flex flex-col starDust">
      <div className="flex place-items-center justify-between mb-4">
        <button onClick={back}>
          <BackBtn size={30}/>
        </button>

        <span className="text-xl">register</span>
        <div style={{width:'30px'}}></div>
      </div>

      <span className="text-xs">email</span>
      <input data-type="email" className="mt-1" type="text" placeholder="Email" onChange={changeValue}/>
      <div style={{color:'#ff6363',opacity:(message.email) ? '1' : '0'}} className="mb-2">{message.email}</div>
      <span className="text-xs">password</span>
      <input data-type="password" className="mt-1" type="password" placeholder="Password" onChange={changeValue}/>
      <div style={{color:'#ff6363',opacity:(message.password) ? '1' : '0'}} className="mb-2">{message.password}</div>
      <span className="text-xs">confrim password</span>
      <input data-type="cpassword" className="mt-1" type="password" placeholder="Confirm Password" onChange={changeValue}/>
      <div style={{color:'#ff6363',opacity:(message.cpassword) ? '1' : '0'}} className="mb-2">{message.cpassword}</div>
      <span className="text-xs">password</span>
      <input data-type="nickname" className="mt-1" type="text" placeholder="nickname" defaultValue={props.nickname} onChange={changeValue} readOnly/>

      <div className="flex justify-center" onClick={submit}>
        <Btn text="Register"/>
      </div>

      <div className="attribute flex justify-center">
        <a href="https://iconscout.com/icons/back-arrow"  target="_blank">Free Back Arrow Icon</a> by <a href="https://iconscout.com/contributors/eva-icons" target="_blank">Akveo</a>
      </div>
    </div>
  )
}