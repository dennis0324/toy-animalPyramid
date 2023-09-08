import { Props } from "@src/animal-pyramid/types";
import BackBtn from "../back-button";
import { styled } from "styled-components";

export default function OpenSource(props:Props){
  function back(){
    props.setLoginState('anonymous')
  }

  const Container = styled.div`
    width: 400px;
    height: 450px;
    overflow-y: scroll;
  `

  return (
    <Container>
      <div className="fixed top-5 left-5 right-5 flex place-items-center justify-between mb-4">
        <button onClick={back}>
          <BackBtn size={30}/>
        </button>

        <span className="text-xl">Open Source</span>
        <div style={{width:'30px'}}></div>
      </div>

      <div>
        Copyright (c) 2023 by Katherine Kato (https://codepen.io/kathykato/pen/rZRaNe)

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

      </div>
      <br/>
      <div>
        Copyright (c) 2023 by Danil Goncharenko (https://codepen.io/Danil89/pen/MzrEdX)

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </div>
      <div className="attribute flex justify-center">
        <a href="https://iconscout.com/icons/back-arrow"  target="_blank">Free Back Arrow Icon</a> by <a href="https://iconscout.com/contributors/eva-icons" target="_blank">Akveo</a>
      </div>
    </Container>
  )
}