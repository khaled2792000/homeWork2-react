import React, { Component, useState } from "react";

export function InputRow({ inputLabelName, inputType }) {
  const [showMessageUP, setShowMessageUP] = useState(false);
  const [showMessageDOWN, setShowMessageDOWN] = useState(false);

  function inputInFocus() {
    setShowMessageUP(true);
  }

  function inputOutFocus(e) {
    setShowMessageUP(false);
    try {
      if (parseInt(e.target.value) > 555) {
        setShowMessageDOWN(true);
      } else {
        setShowMessageDOWN(false);
      }
    } catch {}
  }

  return (
    <div className="inputRow">
      {showMessageUP && <p style={{ color: "red" }}>{inputLabelName}</p>}
      <input
        type={inputType}
        placeholder={inputLabelName}
        onFocus={inputInFocus}
        onBlur={inputOutFocus}
      />
      {inputLabelName === "Psychometry Grade" ? (
        <p style={{ color: "red" }}>
          {showMessageDOWN
            ? "U Can enter the collage"
            : "U can not join the college"}
        </p>
      ) : null}
    </div>
  );
}

export default class CCForm extends Component {
  render() {
    return (
      <section>
        <p>Question 2</p>
        <InputRow inputLabelName={"Family Name"} inputType={"text"} />
        <InputRow inputLabelName={"Personal Name"} inputType={"text"} />
        <InputRow inputLabelName={"Psychometry Grade"} inputType={"number"} />
      </section>
    );
  }
}
