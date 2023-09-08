import './normal-button.css';
export default function Btn({text}:{text:string}){
  return (
  <div id="container">
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </button>
  </div>
  )
}