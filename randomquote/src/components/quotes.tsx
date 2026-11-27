import { useState } from 'react';
import quotes from '../data/quotes.json';

function Quotes() {

    const [quoID, setQuoID] = useState(1);

    const quote = quotes.find((q) => q.id === quoID);

    if (!quote) {
        return <p>Quote not found.</p>;
    }


    function generateQ() {
        // I've generated the random number
        const randomNum = Math.floor(Math.random() * quotes.length) + 1;
        setQuoID(randomNum);
    }


    return(
        <div>
            <h2>{quote.quote}</h2>
            <button onClick={() => generateQ()}>Generate</button>
        </div>
        
    );
}

export default Quotes;