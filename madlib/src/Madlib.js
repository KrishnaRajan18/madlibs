import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import Story from "./Story";
import { v4 as uuid } from "uuid/dist";

function Madlib() {
  const INITIAL_STATE = [];
  const [story, setStory] = useState(INITIAL_STATE);
  const createStory = newStory => {
    setStory(entries => [...entries, { ...newStory, id: uuid() }]);
  };
  return (
    <div className="Madlib">
      <h1>Madlibs!</h1>
      <MadlibForm createStory={createStory} />
      {story.map(story => (
        <Story
          color={story.color}
          noun={story.nown}
          noun2={story.nown2}
          adjective={story.adjective}
          setStory={setStory}
        />
      ))}
    </div>
  );
}

export default Madlib;
