import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import Story from "./Story";
import { v4 as uuid } from "uuid/dist";

const Madlib = () => {
  const INITIAL_STATE = [];
  const [story, setStory] = useState(INITIAL_STATE);
  const [showStory, setShowStory] = useState(false);
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
          noun={story.noun}
          noun2={story.noun2}
          adjective={story.adjective}
          setStory={setStory}
          story={story[0]}
        />
      ))}
    </div>
  );
};

export default Madlib;
