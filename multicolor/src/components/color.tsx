import { useState } from 'react';
import './color.css';

function Color() {

    const[color, setColor] = useState("");
    const colors = ["red", "blue", "white", "black", "yellow"];

    function handleClick(value: string) {
        if (value == "red") {
            setColor("red");
        } else if (value === "blue") {
            setColor("blue");
        } else if (value === "white") {
            setColor("white");
        } else if (value === "black") {
            setColor("black");
        } else if (value === "yellow") {
            setColor("yellow");
        } else {
            setColor("white");
        }
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