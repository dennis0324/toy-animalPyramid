import { Props } from "@animal/types"
import { AuthReturn } from "@src/socket/types"
import { useEffect, useState } from "react"

export default function UserRegister(props:Props){

  // login property
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [nickname, setNickname] = useState("")

  // button property
  const [isDisabled, setIsDisabled] = useState(false)

  const [message, setMessage] = useState({
    email: "",
    password: "",
  })


  function showMessage(type:string, msg:string){
    setMessage({...message, [type]: msg})
  }


  function auth({data}:AuthReturn){
    switch(data.message){
      case 'auth/weak-password':
        showMessage('password','비밀번호가 너무 약합니다.')
        break;
      case 'auth/invalid-email':
      case 'auth/email-already-in-use':
      case 'auth/admin-restricted-operation': 

      break;
    }
    console.log("testing")

    // enable button
    setIsDisabled(false)
  }

  
  const user = props.manager.getUser()
  useEffect(() => {
    user.off('auth',auth)
    user.on('auth',auth)
    console.log('regi')
  },[])

  
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

  function submit(e:React.MouseEvent<HTMLButtonElement>){
    // disable button
    setIsDisabled(true)
    
    if(confirmPassword !== password){
      return alert("password not match")
    }

    console.log("submit")
    user.emit('auth',{
      email,
      password,
      nickname
    })
  }

  return (
    <div className="flex flex-col">
      register
      {message.email}
      <input data-type="email" className="h-12" type="text" placeholder="Email" onChange={changeValue}/>
      {message.password}
      <input data-type="password" className="h-12" type="text" placeholder="Password" onChange={changeValue}/>
      <input data-type="cpassword" className="h-12" type="text" placeholder="Confirm Password" onChange={changeValue}/>
      <input data-type="nickname" className="h-12" type="text" placeholder="nickname" onChange={changeValue}/>
      <button 
        type="button" 
        className="pheasant-demure-button solid dark" 
        onClick={submit}
        disabled={isDisabled}
      >
        <span className="label">Register</span>
      </button>
    </div>
  )
}