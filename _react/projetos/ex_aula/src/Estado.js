import { useState } from 'react';

export default function Estado() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [soma, setSoma] = useState(0);

    function somar() {
        setSoma(Number(num1)+Number(num2));
    }

    return (
        <div>
            <label>Num1:</label> 
            <input type='text' 
                onChange={e => setNum1(e.target.value)}></input>
            <label>Num2:</label> 
            <input type='text' 
                onChange={e => setNum2(e.target.value)}></input>
            <br></br>
            <button onClick={somar}>Somar</button>
            <br></br>
            <label>Resultado:{soma}</label>
        </div>
    );
}