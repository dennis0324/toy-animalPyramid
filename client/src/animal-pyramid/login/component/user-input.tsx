import { Props } from "@animal/types";

export default function UserInput(props:Props){
  return (
    <div className="flex flex-col">
      username
      <input className="h-12" type="text" placeholder="Username"/>
      <button type="button" className="pheasant-demure-button solid dark">
        <span className="label">Standard</span>
      </button>
    </div>
  )
}