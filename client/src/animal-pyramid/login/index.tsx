import { useEffect, useState } from "react"
import UserInput from "./component/user-input"
import UserRegister from "./component/user-register"
import { Props } from '@animal/types'

type LoginState = "anonymous"|"login"|"register"|"forgotPassword"

export default function LoginPage(props:Props){


  const [loginState, setLoginState] = useState<LoginState>("register")

  const user = props.manager.getUser()

  // user.off('test')
  useEffect(() => {
    // user.off()
    user.on('auth',({data}) => {
      if(data.message === "success"){
        setLoginState('login')
      }
    },[])
  })

  return (
    <div>
      {
        {
          'anonymous' :<UserInput {...props}/>,
          'login' : <div></div>,
          'register' : <UserRegister {...props}/>,
          'forgotPassword' : <UserRegister {...props}/>
        }[loginState]
      }
      
    </div>
  )
}