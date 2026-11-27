import { useState, type ChangeEvent } from 'react';

function TextBox() {

    const [text, setText] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const maxLength = 200; 


    return(
        <div>
        <textarea 
        value={text}
        onChange={handleChange}
        placeholder='Write your comment...'
        rows={4}
        maxLength={maxLength}
        >
            Enter Text Here
        </textarea>
        <div>
            {text.length} / {maxLength}
        </div>
        </div>
    );
}


export default TextBox;