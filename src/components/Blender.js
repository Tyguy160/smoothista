import React from "react";
import "../styles/Blender.css";
import blender from "../styles/blender.svg";
function Blender(props) {
  return (
    <div className="blender-container">
      <img
        src={blender}
        className={`${props.className} blender`}
        alt="Blender"
      />
      {props.axiosFailed ? (
        <div className="flames">
          <div className="fire" id="fire-1">
            🔥
          </div>
          <div className="fire" id="fire-2">
            🔥
          </div>
        </div>
      ) : (
        ""
      )}
      {props.axiosFailed ? (
        <div className="error-message">
          Uh oh...something went wrong.
          <br />
          Try reloading the app or checking your internet connection.
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Blender;
