import {blocks} from '../../source/horse/'
export default function Button(){
  const styleObj:React.CSSProperties = {
    position: "absolute",
    top: "50%",
    right: "0",
    left: "0",
    display: "block",
    width: "240px",
    padding: "20px",
    margin: "0 auto",
    border: "0",
    cursor: "pointer",
    borderRadius: "2px",
    transform: "translateY(-50%)",
    boxShadow: "0 10px 20px -5px #94a6af",
    overflow: "hidden"
  }

  // const image1:React.CSSProperties = {
  //   backgroundImage: `url(${blocks[0]})`,
  //   width: '32px',
  //   height: '32px',
  // }

  // const image2:React.CSSProperties = 

  function horseStyle(num:number){
    return {
      backgroundImage: `url(${blocks[num]})`,
      width: '32px',
      height: '32px',
      position: 'relative',
      top: '0'
    } as React.CSSProperties
  }


  return (
    <button style={styleObj}>
      <div style={{
        background: 'rgb(255 255 255 / 50%)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        display: 'flex',
      }} className='text-center align-middle'>
        <div className='flex jus'>
          start
        </div>
      </div>
      <div className='flex justify-around'>
        {
          [1,2,3,4,5].map((value) => {
            return (
            <div style={horseStyle(value)} key={value}></div>
            )
          })
        }
      </div>
    </button>
  )
}