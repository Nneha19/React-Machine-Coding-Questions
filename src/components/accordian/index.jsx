import { useState } from "react"
import data from "./data";
import './style.css'


export default function Accordian(){

    const [selected,setSelected]=useState(null);
    const [enableMultiSelection,setenableMultiSelection]=useState(false);
    const [multiple,setMultiple]= useState([]);


    function handleSingleSelected(getCurrentId){
        setSelected(getCurrentId===selected?null:getCurrentId);
    }

    function handleMultipleSelected(getCurrentId){
        let cpyMultiple=[...multiple]
        const findIndexofCurrentId= cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexofCurrentId)

        if(findIndexofCurrentId===-1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexofCurrentId,1)

        setMultiple(cpyMultiple)
    }

    return <div className="wrapper">
        <button onClick={()=>setenableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</button>
        <div className="accordian">
            {
                data.length>0? data.map(dataItem=><div className="item">
                    <div className="title"
                    onClick={enableMultiSelection
                        ? ()=>handleMultipleSelected(dataItem.id)
                        :()=>handleSingleSelected(dataItem.id)} >
                            
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                    </div>
                    {
                         enableMultiSelection?
                         multiple.indexOf(dataItem.id)!==-1&&
                         <div className="content">{dataItem.answer}</div>:
                         selected===dataItem.id && 
                         <div className="content">{dataItem.answer}</div>
                    }

                    </div>)
                :<div>No data Found</div>
            }
        </div>
    </div>
}