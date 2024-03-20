import React, { useState } from "react";

export default function DataForm(props) {

  const uppercase = () => {
    // console.log("uppercase is converted" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("SuccessFully converted UpperCase", "success");
  };
  const lowercase = () => {
    // console.log("Lowercase is converted" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("SuccessFully converted LowerCase!", "success");
  };

  const CopyText = () => {
    // let text = document.getElementById("mybox");
    // text.select();
    navigator.clipboard.writeText(text /*.value*/); 
    props.showAlert("Text Copied", "info");
  };
  const ExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Spaces Successfully", "success");
  };
  const cleartext = () => {
    // console.log("Lowercase is converted" + text);
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared", "warning");
  };
  const changed = (event) => {
    // console.log("uppercase is changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // console.log(useState('enter here again'))
  // setText("this is updating method of value of variable in react")
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={changed}
            style={{
              backgroundColor: props.mode === "dark" ? "#4CC9F0" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="2"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={uppercase}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowercase}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={cleartext}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ExtraSpaces}>
          Remove Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={CopyText}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {
              return element.length !== 0}).length}{" "} Minutes Reading Time</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview!"}
        </p>
      </div>
    </>
  );
}
