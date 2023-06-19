import { useState } from 'react';

export default function Props() {
    const [texto, setTexto] = useState("");
    
    return (
        <div>
            <Campo value = "Digite algo:"/>
            <input type='text' 
                onChange={e => setTexto(e.target.value)}></input>
            <Campo value={texto}/>            
        </div>
    );
}

function Campo ({ value }) {
    return (
        <>
            <label>{value}</label> 
            <br></br>
        </>
    );
}