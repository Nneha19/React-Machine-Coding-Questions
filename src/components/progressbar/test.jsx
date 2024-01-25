
import Progressbar from ".";
import { useEffect,useState } from "react";


export default function Progressbartest(){

    const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

    return(
        <div className="App">
            <Progressbar bgcolor="#6a1b9a" completed={completed}/>
        </div>
    )
}