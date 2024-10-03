import { useState, useRef, useEffect} from "react";
import { Output } from "./Output";

export function Input() {
    const [iput,Setinput]=useState("");
    const [field,Setfield]=useState([]);
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, []);
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed!'); 
          clearfield(iput);
          Setinput("");
          document.title= "Fetching...";
          setTimeout(()=>{document.title="Portfolio";},300);
        }
    };
    const clearfield=(iput)=>{iput.toLowerCase()==="clear"?Setfield([]):Setfield([...field,iput]);}; 
    return (
        <>
        <br />
        <br />
        <div>
            {field.map((item,index)=>(
              <div key={index}>User@Sharwesh-Pc:~ $&ensp;{item}
              <br />
              <Output input={item}/>
              <br />
              </div>
            ))}
            <label htmlFor="input" ref={inputRef}>User@Sharwesh-Pc:~ $&ensp; </label>
            <input id="input" className="textbar" value={iput} onChange={(e)=>Setinput(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>
        </>
    )
}
