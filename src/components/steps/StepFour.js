import React from "react";
import DetailListReadOnly from "../details/DetailListReadOnly";
import StepForm from "./StepForm";

const StepFour = ({ gameData, onSubmit, onStepBack }) => {
  return (
    <StepForm
      showCancel={true}
      onSubmit={onSubmit}
      onReset={onStepBack}
      header="Step Four"
      subheader="World Building"
      instructions={
        <>
          <p>
            You should now have a few characters with different skills,
            appearances, relationships, and heritages. Where did they come from?
            What happened to them? What does this world look like? You now have
            all the tools you need to answer these questions.
          </p>
          <p>
            Review each character’s details. Then start asking yourself
            questions about who these characters are and how they got here.
            Start with one character. Elaborate on answers that interest you and
            write notes as you go. You might think of something that will be
            relevant later as you build your world.
          </p>
          <p>
            Keep track of any major factions, places, and events that you
            created to give these characters their details. Other characters may
            share these details, and they will help build the geography and laws
            of your world.
            <br />
            Not every character detail needs to exist by itself.
            <br /> If a character has both the soldier and the doctor skills
            these two details could be combined into one: combat medic. This way
            a complex character becomes easier to detail. When you find yourself
            describing a place, make a note of it and start drawing a simple
            map. When you make a faction, name it and write a brief description.
            When you describe a fundamental principle of your world, like how
            magic or technology works, make a note of it. Create a timeline of
            events like births and deaths of notable people, wars, etc.
          </p>
        </>
      }
    >
      <p>
        Get your Notes and start planning! Here's your character prompts so far.
      </p>
      <DetailListReadOnly characters={gameData.characters} />
    </StepForm>
  );
};
export default StepFour;
