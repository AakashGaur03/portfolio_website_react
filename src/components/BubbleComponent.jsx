import '../App.css'
import { useState,useEffect } from 'react'

const BubbleComponent = () => {
    const generateRandomPositions =()=>({
        x:Math.random() * window.innerWidth-50,
        y:Math.random() * window.innerHeight,
    })
    
    const [bubbles,setBubbles]=useState(Array.from({length:500} ,generateRandomPositions))
    // const [bubbles,setBubbles]=useState(Array.from({length:400} ,()=>({
    //     x:123,y:155
    // })))
    
    const handleMouseMove=(e)=>{
        const currentPosition={x:e.clientX ,y:e.clientY}
        setBubbles(bubbles.map((bubble)=>({
            ...bubble,
            isHovered: Math.abs(bubble.x - currentPosition.x) <100 &&
            Math.abs(bubble.y - currentPosition.y)<100,
        })))
    }
    
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, [bubbles]);
    
  return (
    <section className="mainBubbles">

    <div>
    {bubbles.map((bubble,index)=>(
        <div
        
    key={index}
    className={`bubble ${bubble.isHovered ? 'hovered' : ''}`}
    style={{left:bubble.x , top:bubble.y}}
    >
        
    </div>
))}
</div>
</section>
  )
}

export default BubbleComponent