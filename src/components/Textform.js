import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleUppercaseClick = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };
  const handleLowercaseClick = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  };
  const handleAlternateCaseClick = () => {
    let alternateText = text.toLowerCase().split("");
    for (var i=0; i<alternateText.length; i += 2) {
      alternateText[i] = alternateText[i].toUpperCase();
    }
    setText(alternateText.join(""));
  };
  const handleClearText = () => {
    setText("");
  };
  // const handleCopyText = () => {
  //   var text = document.getElementById("textBox");
  //   text.select();
  //   text.setSelectionRange(0, 9999);
  //   navigator.clipboard.writeText(text.value);
  // };
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black"}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleAlternateCaseClick}>
          AlTeRnAtE CaSe
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy text
        </button> */}
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear text
        </button>
      </div>
      <div className="container my-3" id="textBox">
        <h2>Text summery</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>You need {0.008 * text.split(" ").length} minutes to read this text</p>
      </div>
    </>
  );
}
