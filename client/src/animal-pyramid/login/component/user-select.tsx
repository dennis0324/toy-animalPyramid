import BackBtn from "@src/animal-pyramid/common/back-button";
import { Props } from "../../types";

export default function UserSelect(props:Props){
  function register(){
    props.setLoginState('register');
  }

  function back(){
    props.setNickname('')
    props.setLoginState('anonymous');
  }
  return (
    <div>
      <button onClick={back}>
        <BackBtn size={30}/>
      </button>
      <div>
        {props.nickname} is not been registered yet.<br/>
        You Could use permanently if you register.<br/>
        <button>start as anonymous</button>
        <button onClick={register}>Register</button>
      </div>
      <div className="attribute flex justify-center">
        <a href="https://iconscout.com/icons/back-arrow"  target="_blank">Free Back Arrow Icon</a> by <a href="https://iconscout.com/contributors/eva-icons" target="_blank">Akveo</a>
      </div>
    </div>
  )
}