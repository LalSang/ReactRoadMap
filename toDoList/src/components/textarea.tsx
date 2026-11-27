import { useState, type ChangeEvent,  type FormEvent} from 'react';

type Item = {
    id: number;
    text: string;
}

function Textarea() {
    
    const [input, setInput] = useState<string>("");
    const [items, setItems] = useState<Item[]>([]);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // stop page from reloading

        const trimmed = input.trim();
        if (!trimmed) return; // ignore empty input 

        const newItem: Item = {
            id: Date.now(), text: trimmed
        };

        setItems((prev) => [...prev, newItem]); // add to the array
        setInput(""); // clear the input
    }

    const handleDelete = (id:number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange}
                placeholder='Type task...'
                />
                <button type='submit'>Add</button>
                
            </form>

            <ul>
                {items.map((item) => (
                    <li 
                    key={item.id}>
                    {item.text}
                    <button onClick={() => handleDelete(item.id)}>X</button>
                     </li>
                ))}
                
            </ul>

        </div>

       
    );
}

export default Textarea;