import { backgrounds } from "@src/source/background"
import styled, { keyframes } from "styled-components"
import './background.css'
import { createRef, useEffect, useState } from "react"
import { useAnimate,motion } from "framer-motion";

const Background = styled.div`
width:100%;
height:100%;
position:absolute;
overflow:hidden;
`

const BackgroundWrapper = styled.div`
width:100%;
height:100%;
display: block;
position: relative;

`

export default function background(){
  const [windowWidth, setwindowWidth] = useState(getImageSize(window));
  const [backgroundCount,setBackgroundCount] = useState(countBackground(window));

  const widthRef = createRef<HTMLImageElement>();
  useEffect(() => {
    window.addEventListener('resize', () => updateBackground(window));
    return () => { // cleanup
      window.removeEventListener( 'resize', () => updateBackground(window));
    }
  }, []);


  function backgroundStyle(index:number):React.CSSProperties{
    return {
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      maxWidth: 'none',
    }
  }

  function backgroundConnectStyle():React.CSSProperties{
    return {
      display:'flex',
      height: '100vh',
      position: 'absolute',

    }
  }

  function getImageSize(window:Window){
    return window.innerHeight / 9 * 16
  }

  function countBackground(window:Window){
    const imageSize = getImageSize(window)
    console.log(Math.ceil(window.innerWidth / imageSize + 2))
    return Math.ceil(window.innerWidth / imageSize + 2)
  }

  function updateBackground(window:Window){
    setwindowWidth(getImageSize(window))
    setBackgroundCount(countBackground(window))
  }



  return (
    <Background>
      <BackgroundWrapper>
      {
          backgrounds.map((background,index) => {
            return (
              <motion.div
              initial={{x:0}}
              animate={{x:windowWidth * -1}}
              transition={{duration: index * 20, repeat: Infinity,ease:'linear'}}
              key={index + 'b'} className={"background" + index} style={backgroundConnectStyle()}>
                {
                  Array(backgroundCount).fill(0).map((_,index2) => {
                    return(
                      <img ref={widthRef} src={`${backgrounds[index]}`} key={index +':'+index2} style={backgroundStyle(index)}></img>
                    )
                  })
                }
              </motion.div>
            )
          })
        }
      </BackgroundWrapper>
    </Background>
  )
}