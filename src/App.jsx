import { useState,useEffect,useRef } from 'react';
import { Input } from './Input';
export function point(){
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, []);
    return inputRef;
}
export default function App(){
    // useEffect(() => {
    //     window.addEventListener('click', point());
    
    //     // Cleanup function to remove the event listener
    //     return () => {
    //       window.removeEventListener('click', point());
    //     };
    //   }, []);
    return( 
    <div className="main">
        <Input/>
    </div> 
    )    
}