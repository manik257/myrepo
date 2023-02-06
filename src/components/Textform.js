import React, {useState} from 'react'

export default function Textform(props) { 
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked "+ text);
        let newtext = text.toUpperCase();
        // setText("You have clicked on handleUpClick")
        setText(newtext);
        props.showAlert("Text converted to uppercase", "success");
    }
    const handleLowClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "success");
    }
    const handleClrClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared now", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("onchange");
        setText(event.target.value);
    }
    // const [text, setText] = useState("Enter text here");
    const [text, setText] = useState("");
    // text = "new text"; //wrong way to change the state
    // setText("new text");  //correct way to change state
    const handleCopy = () =>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success");
    }
    const handleRemoveSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed from the text", "success");
    }
  return (
    <>
    <div className='container' style={{color: props.mode=== "dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== "dark"?"#292b2e":"white",color: props.mode=== "dark"?"white":"black"}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode=== "dark"?"white":"black"}}>
        <h1>Your text contains</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to priview!"}</p>
    </div>
    </>
  )}



