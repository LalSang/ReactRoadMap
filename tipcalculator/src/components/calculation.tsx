import { useState } from 'react';

function Calculation() {

    const [tip, setTip] = useState(0); 
    const [bill, setBill] = useState("");

    const percentage = ["15", "20", "25", "30"];
    const number = ["1","2","3","4","5","6","7","8","9","0"];

    function handleClick(value: string) {
        setBill(prev => prev + value);
    }

    function toggle(value: string) {
        setTip(Number(value));
    }

    const billAmount = Number(bill) || 0;
    const tipAmount = billAmount * (tip / 100);
    const total = billAmount + tipAmount;

    return(
        <div>
            <h1>Enter Bill Amount:</h1>
            <h1>{bill || 0}</h1>
            <button onClick={() => setBill("")}>Clear</button>
            <div>
            {number.map(n => (
                <button key={n} onClick={() => handleClick(n)}>{n}</button>
            ))}
            </div>
            
            <h1>Enter Tip Percentage:</h1>
            <h1>{tip}</h1>
            <button onClick={() => setTip(0)}>Clear</button>
            <div>
            {percentage.map(t => (
                <button key={t} onClick={() => toggle(t)}>{t}</button>
            ))}
            </div>

            <div>
                <h2>Today's Total: {total}</h2>
            </div>
        </div>
    );
}

export default Calculation;