import React from "react";
import "./Story.css";

function Story({ setStory, color, noun, noun2, adjective }) {
  const restart = () => {
    setStory([]);
  };
  return (
    <div className="Story">
      <p>
        There was a {color} {noun} who loved a {adjective} {noun2}.
      </p>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default Story;
