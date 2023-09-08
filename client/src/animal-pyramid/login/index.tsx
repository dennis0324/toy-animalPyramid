import { memo, useEffect, useState } from "react"
import UserInput from "./component/user-input"
import UserRegister from "./component/user-register"
import { LoginState, Props } from '@animal/types'
import UserLogin from "./component/user-login"
import UserSelect from "./component/user-select"
import { styled } from "styled-components"
import OpenSource from "../common/opensoure"

const LoginPageSt =  memo(styled.div`
position: absolute;
background-color: #fff;
z-index: 1;
border-radius: 30px;
padding: 50px 30px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
box-shadow: 2px 2px 100px 5px #6d6d6d;`)



export default function LoginPage(props:Props){
  // login property
  const [nickname, setNickname] = useState("")
  const [email,setEmail] = useState("")

  // login state
  const [loginState, setLoginState] = useState<LoginState>("anonymous")

  props = {
    ...props,
    nickname,
    email,
    setNickname,
    setEmail,
    setLoginState
  }

  const user = props.manager.getUser()


  return (
    <LoginPageSt>
      {
        {
          'anonymous' :<UserInput {...props}/>,
          'userSelect' : <UserSelect {...props}/>,
          'login' : <UserLogin {...props}/>,
          'register' : <UserRegister {...props}/>,
          'forgotPassword' : <UserRegister {...props}/>,
          'openSource' : <OpenSource {...props}/>
        }[loginState]
      }
      
    </LoginPageSt>
  )
}