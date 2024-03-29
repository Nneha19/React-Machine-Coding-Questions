import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus,FaPlus} from "react-icons/fa";
export default function MenuItem({item}){
 
    const [displayCurrentChildren,setDisplyCurrentChildren]=useState({});

    function handleToggleChildren(currentlabel){
        setDisplyCurrentChildren({
            ...displayCurrentChildren,[currentlabel]:!displayCurrentChildren[currentlabel]
        })

    }

    return <li className="menu-li" >
     <div className="menu-item-container"
     style={{
        display: 'flex',
        gap:'5px',
        listStyle: 'none',
        marginTop: '0px',
        marginBottom: '0px',
    
     }}>
     <p>{item.label}</p>
     {
        item && item.children && item.children.length ? <span 
        onClick={()=>handleToggleChildren(item.label)}>
            {
                displayCurrentChildren[item.label]? <FaMinus color="#fff" size={25}/>: <FaPlus color="#fff" size={25}/>
            }
        </span> 
        :null}
     </div>
     {
displayCurrentChildren[item.label]?
        <MenuList list={item.children}/>
        :null
         }
    </li>
}