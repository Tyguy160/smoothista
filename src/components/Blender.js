import React from "react";
import "../styles/Blender.css";
import blender from "../styles/blender.svg";
function Blender(props) {
  return (
    <div>
      <img
        src={blender}
        className={props.className}
        style={{ maxHeight: `50vh` }}
        alt="Blender"
      />
    </div>
  );
}

export default Blender;
