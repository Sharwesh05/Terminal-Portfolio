import { useState, useRef, useEffect} from "react";
import { Output } from "./Output";
import { point } from "./App";

export function Input() {
    const [iput,Setinput]=useState("");
    const [field,Setfield]=useState([]);
    const [cstate,setcstate]=useState(true);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed!'); 
          clearfield(iput);
          Setinput("");
          document.title= "Fetching...";
          setTimeout(()=>{document.title="Portfolio"},300);
        }
    };
    const clearfield=(iput)=>{if(iput.toLowerCase()==="clear"){
      Setfield([]);
      setcstate(false);
    }else{
      Setfield([...field,iput]);
    }}; 
    return (
        <>
        {
          cstate &&<>{cstate}welcome to my interactive shell Website<br />please type 'help' to see commands:<br /><br /></>
        }
        <div>
            {field.map((item,index)=>(
              <div key={index}>User@Sharwesh-Pc:~ $&ensp;{item}
              <br />
              <Output input={item}/>
              </div>
            ))}
            <label htmlFor="input" ref={point()}>User@Sharwesh-Pc:~ $&ensp; </label>
            <input id="input" className="textbar" value={iput} onChange={(e)=>Setinput(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>
        </>
    )
}
