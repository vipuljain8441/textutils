import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase", "success");
  };
  const handlelowClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase", "success");
  };
  const handleclear = () => {
    let newText = "";
    setText(newText);
    props.showalert("Clear the text", "success");
  };
  const handleCopy = () => {
    // console.log("I am copy");
    let newtext = document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showalert("Copy text", "success");
  };
  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Remove all extra spaces", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //  setText("Enter text here-");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1  my-2" onClick={handleUpClick}>
          {" "}
          Convert to Uppercase{" "}
        </button>
        <button className="btn btn-primary mx-1  my-2" onClick={handlelowClick}>
          {" "}
          Convert to LowerCase{" "}
        </button>
        <button className="btn btn-primary mx-1  my-2" onClick={handleclear}>
          {" "}
          Clear text{" "}
        </button>

        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
          {" "}
          copy text{" "}
        </button>
        <button
          className="btn btn-primary mx-1  my-2"
          onClick={handleExtraSpace}
        >
          {" "}
          Remove Extra Space{" "}
        </button>
      </div>
      <div
        className="container my-3   "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} Miunutes Read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>{" "}
      </div>
    </>
  );
}
