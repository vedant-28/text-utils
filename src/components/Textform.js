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
  }
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUppercaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowercaseClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Text summery</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>You need {0.008 * text.split(" ").length} minutes to read this text</p>
      </div>
    </>
  );
}
