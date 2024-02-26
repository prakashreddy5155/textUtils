import React,{useState} from 'react'
import '../styles/TextUtils.css';
export default function TextUtils(props) 
{


    const [text,setText] = useState("");

    const onClickUpperHandler = () =>
    {
      setText(text.toUpperCase());
    }
  
    const onClickLowerHandler = () =>
    {
      setText(text.toLowerCase());
    }
  
  
    const onClickSpaceToHyphenHandler = () =>
    {
  
      setText(text.replaceAll(" ","-"));
    }

    const onClickHyphenToSpacesHandler = () =>
    {
  
      setText(text.replaceAll("-"," "));
    }
    
    const copyTextHandler = () =>
    {
      let text = document.getElementById("textArea");
      navigator.clipboard.writeText(text.value); // main command to copy the text
      text.select(); // to highlight the copied part 

    }

    const onChangeHandler = (event) =>
    {
      setText(event.target.value);
    }


    return (

        <>
      <div className="mainContainerTextUtils">

<div className="innerContainerTextUtils" style={props.lightState} > 

            <h1>Welcome to {props.title}</h1>
        {/*  creating text area for learning state */ }


{/*  on click handler and onchange handler are declared outside the return function */ }


    
            <textarea className="useCaseTextArea" id="textArea" cols="100" rows="5" value = {text} onChange={onChangeHandler}
            > </textarea> <br />



            <button className = "btnTextUtils" onClick = {onClickUpperHandler}  >Convert to UpperCase</button>
            <button className = "btnTextUtils" onClick = {onClickLowerHandler}  >Convert to LowerCase</button>
            <button className = "btnTextUtils" onClick = {onClickSpaceToHyphenHandler}  >Convert Spaces to Hyphens</button>
            <button className = "btnTextUtils" onClick = {onClickHyphenToSpacesHandler}  >Convert Spaces to Hyphens</button>

            <button className = "btnTextUtils" onClick = {copyTextHandler}  >Copy Text</button>
            


        

        <p> Number of characters: {text.length} </p>
        <p>Number of words: {text.length<1?0:((text.trim()).split(" ").length)}</p>
        <p> Time taken to read: {text.split(" ").length * 0.008} Minutes Read</p>
        

        


        
        <h1>Preview</h1>
        

        <p className = "previewText">
            {text}
        </p>
        </div>
        
        </div>
<div className="btn-containerTextUtils">
        <button onClick = {props.modeToggler} style={props.mode?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}} > {props.oldTextState}</button>
        </div>

        
       
</>
     

  )
}
