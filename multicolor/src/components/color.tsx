import { useState } from 'react';
import './color.css';

function Color() {

    const[color, setColor] = useState("white");
    const colors = ["red", "blue", "white", "black", "yellow"];

    function handleClick(value: string) {
        setColor(value);
    }


    return(
        <div className={color}>
            {colors.map(c => (
                <button key={c} onClick={() => handleClick(c)}>{c}</button>
            ))}
        </div>
    );
}

export default Color;