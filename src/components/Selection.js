import React from "react";
import "../styles/Child.css";
import { useState } from "react";
const Selection = (props) => {
  let [component, updateSelectionStyle] = useState({ background: "" });
  const { applyColor } = props;
  return (
    <>
      <div
        id="Box"
        className="fix-box"
        onClick={() => applyColor(updateSelectionStyle)}
        style={{ background: component.background }}
      >
        <h2 className="subheadingS">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
