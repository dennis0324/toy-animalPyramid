import './hamburger.css';
export default function HamburgerBtn(){
  return (
    <div className="row">
        <input type="checkbox" id="hamburger"/>
        <label htmlFor="hamburger" className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </label>
    </div>
  )
}