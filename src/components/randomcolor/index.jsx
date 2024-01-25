import { useState,useEffect } from "react"




export default function RandomColors(){

    const [typeofColor,settypeofColor]=useState('hex');
    const [color,setcolor]=useState('#000000')

    function randomColor(length){
        return Math.floor(Math.random()*length);
    }

    function handleHexColor(){
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor='#';

        for(let i=0;i<6;i++){
            hexColor+=hex[randomColor(hex.length)]
        }
        setcolor(hexColor)
    }

    function handleRgbColor(){
        const r=randomColor(256);
        const g=randomColor(256);
        const b=randomColor(256);
        setcolor(`rgb${r},${g},${b}`)
    }

    useEffect(()=>{
        if(typeofColor==='rgb') handleRgbColor()
        else handleHexColor()
    },[typeofColor])



return <div style={
        {
            width:'100vw',
            height:'100vh',
            background: color,
        }
    }>
   <button onClick={()=>settypeofColor('hex')}>Create HEX Color</button>
        <button onClick={()=>settypeofColor('rgb')}>Create RGB Color</button>
        <button onClick={typeofColor === 'hex' ? handleHexColor: handleRgbColor}>Generate Random Color</button>

        <div style={
            {
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                color:'#fff',
                fontSize:'60px',
                marginTop:'40px',
            }
        }>
            <h3>{typeofColor === 'rgb'?'RGB Color = ':'HEX Color = '}</h3>
            <h1>{color}</h1>
        </div>

        </div>
}