import { useState } from 'react';

function Calculate() {
    const [input, setInput] = useState("");
    const buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"];

    function handleClick(value: string) {
        if (value === "=") {
            try {
                setInput(String(eval(input)));
            } catch {
                setInput("Error");
            }
        } else {
            setInput(prev => prev + value);
        }
    }

    return(
        <div>
            <h2>{input || "0"}</h2>
            <button onClick={() => setInput("")}>C</button>
            <div>
                {buttons.map(b => (
                    <button key={b} onClick={() => handleClick(b)}>{b}</button>
                ))}
            </div>
        </div>
    );
}

export default Calculate;