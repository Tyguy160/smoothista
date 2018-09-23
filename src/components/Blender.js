import React from "react";
import "../styles/Blender.css";
import blender from "../styles/blender.svg";
function Blender() {
  return (
    <div>
      <img src={blender} style={{ maxHeight: `50vh` }} alt="Blender" />
    </div>
  );
}

export default Blender;
