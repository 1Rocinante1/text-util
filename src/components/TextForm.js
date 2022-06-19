import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClClick = ()=>{
        setText("");
    }

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Enter the text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-1"  onClick={handleLoClick}>LowerCase</button>
                <button className="btn btn-danger mx-1 float-end"  onClick={handleClClick}>Clear</button>
            </div>

            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1> Your Summary </h1>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length} minutes read </p>
            </div>
        </>
    ) 
}
