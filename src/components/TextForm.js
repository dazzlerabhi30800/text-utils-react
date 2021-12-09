import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "info");
    }
    const handleDownClick = () => {
        console.log("LowerCase was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "warning");
    }
    const handleClearClick = () => {
        console.log("LowerCase was clicked!" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Textbox has been cleared", "danger");
    }
    const handleOnChange = (event) => {
        console.log("On change!");
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","success");
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard", "secondary");
    }
    const [text, setText] = useState('Enter text here');
    // setText("Dont enter text here");
    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'#4f16df'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor : props.mode==='dark'?'#130a29':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        <button className="btn btn-info mx-2" onClick={handleUpClick}  >Convert to Uppercase</button>
        <button className="btn btn-warning mx-1" onClick={handleDownClick}  >Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}  >Click to Clear Text</button>
        <button className="btn btn-secondary mx-2" onClick={handleCopy}  >Click to Copy Text to clipboard</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}  >Click to Remove Extra Spaces.</button>
    </div>
    <div className="className my-3" style={{color : props.mode==='dark'?'white':'#130a29'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p> 
    </div>
    </>
    )
}