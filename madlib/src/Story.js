import React from "react";
import "./Story.css";

const Story = ({ setStory, noun, noun2, color, adjective }) => {
  const restart = () => {
    // setShowStory(false);
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
};

export default Story;
