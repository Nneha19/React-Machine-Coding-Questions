    import {FaStar} from 'react-icons/fa'
    import './style.css'
    import { useState } from 'react';

    export default function Starrating({noofStars=5}){

        const [rating,setrating]=useState(0);
        const [hover,sethover]=useState(0);

        function handleClick(getCurrentIndex){
            setrating(getCurrentIndex)
            console.log(rating)
        }
        function handleMouseEnter(getCurrentIndex){
            sethover(getCurrentIndex)
        }

        function handleMouseLeave(){
            sethover(rating)
        }


        return(
            <div id="container">
            {
            [...Array(noofStars)].map((stars,index)=>{
                index+=1;
                
                return <FaStar
                className={index <=(hover || rating)?'active':'inactive'}
                key={index}  
                size={40}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                />
            })
            
            }
            
            </div>
        )
    }