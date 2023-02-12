import React, {useState} from "react";

export default function Textform(props) {
    const [text, setText] = useState();
    const handleOnChange = (e) => {
        console.log("Change detected!");
        setText(e.target.value);
    }
    const handleUppercaseClick = () => {
        console.log("Clicked on Uppercase!");
        let newText = text.toUpperCase();
        setText(newText);
    }
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3 my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to Uppercase</button>
    </div>
  );
}
