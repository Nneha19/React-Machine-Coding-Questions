import { useState } from "react"
import './style.css'
import useLocalStorage from "./useLocalStorage"


export default function LightDarkMode(){
   const [Theme,setTheme]=useLocalStorage('theme','dark')
   function changeMode(){
   setTheme(Theme==='light'?'dark':'light')
   }


   return( 
   <div className={Theme } id="container" >
    <div className="lightdarkmode"><h2>Light Dark Mode</h2>
    <button onClick={changeMode} className={Theme}>Turn the world {Theme==='dark'?'☀️':'🌒'}!</button>
    </div>
    </div>
   )
}