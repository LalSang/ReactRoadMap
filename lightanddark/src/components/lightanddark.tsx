import { useState } from 'react';
import './lightanddark.css';

function LightandDark() {

    const[isDark, setIsDark] = useState(false);

    function toggle() {
        setIsDark(prev => !prev);
    }


    return(
        <div className={isDark ? "default-box" : "active-box"}>
            <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
            <button onClick={toggle}>
                Switch to {isDark ? "Light" : "Dark"}
            </button>
        </div>
    );
}

export default LightandDark;
