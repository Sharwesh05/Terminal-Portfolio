import { useState } from 'react';
import { Input } from './Input';
export default function App(){
    return( <div className="main">
        welcome to my interactive shell terminal Website
        <br/>please type "help" to see commands:
        <Input/>
    </div> )    
}