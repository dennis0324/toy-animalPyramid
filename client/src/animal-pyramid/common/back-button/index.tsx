// import './back-button.css';
export default function BackBtn({size}:{size:number}){
  return (
    <svg style={{width:size + 'px',height:size + 'px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="back-arrow"><g data-name="Layer 2"><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" data-name="arrow-ios-back"></path></g></svg>
  )
}