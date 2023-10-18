import { AnimalPyramidSocket } from "@src/socket";
import LoginPage from "./login";
import Background from "./game-component/Background";
import { styled } from "styled-components";
import { useState } from "react";
import Lobby from "./lobby";
export default function AnimalPyramid(){
  const [isLogin,setLogin] = useState(false);

  const Manager = new AnimalPyramidSocket()

  const props={
    manager:Manager
  }

  const mainStyle:React.CSSProperties = {
    display: 'absolute',
  }

  const Main = styled.main`
    width:100vw;
    height:100vh;
  `

  return (
    <Main className="main">
      {isLogin ? <Lobby {...props}/> : <LoginPage {...props}/>}
      <Background/> 
    </Main>
  )
}