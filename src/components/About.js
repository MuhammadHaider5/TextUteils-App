import React, { useState } from "react";

export default function About(props) {
  // const [mystyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  // const [btntext, setBtnText] = useState("Enable Dark mode");
  // const toggleStyle = () => {
  //   if (mystyle.color === "black") {
  //     setMystyle({
  //       color: "white",
  //       backgroundColor: "#191970",
  //       border: "2px solid white",
  //     });

  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });

  //     setBtnText("Enable Dark Mode");
  //   }
  // };
  return (
    <div className="container">
      <h2
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtails gives you a way to analyze your text quickly and
              effectively. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtails is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtails reports the number of words and characters. thus it is
              suitable for writing text with word / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              chorom, firefox, internet explorer,safari,opera. It suits to count
              characters in facebook, blogs, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary my-3"
        >
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
