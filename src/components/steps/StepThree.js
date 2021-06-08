import classNames from "classnames";
import React, { useState } from "react";
import styles from "../../styles/details.module.scss";
import DetailTable from "../details/DetailTable";
import StepForm from "./StepForm";
const StepThree = ({ gameData, onSubmit, onUpdate, onStepBack }) => {
  const [existingCards, setExistingCards] = useState(gameData.characters);
  const [charactersLoaded, setCharacterLoaded] = useState([]);
  function handleItemLoad(character, newCards) {
    const currentExistingCards = [...existingCards, ...newCards];
    setExistingCards(currentExistingCards);
    const oldCharacters = charactersLoaded;
    const newCharacter = { ...character, details: newCards };
    oldCharacters.push(newCharacter);
    setCharacterLoaded(oldCharacters);
  }

  function handleSubmit() {
    onSubmit(charactersLoaded);
  }

  return (
    <StepForm
      showCancel={true}
      onSubmit={handleSubmit}
      onReset={onStepBack}
      header="Step Three"
      subheader="Create Character Details"
      instructions={
        <>
          <p>
            This Step will Deal a number of cards face up under each character
            equal to their card’s value. These cards each represent the history
            of each character, who they’ve met, what they’ve done, and what
            skills they have acquired. Each detail needs to be accounted for in
            the world you build.
          </p>
          <p>
            Be on the lookout for common suits between the characters. What do
            these similarities say about the world, if anything? Lots of skills
            might point to a group of mercenaries, freelancers, or other
            experienced professionals.
          </p>
          <p>
            Several heritages or relationships may mean that the world is
            densely populated with several geographical features and cultures.
            Characters who all have several traits might indicate a special
            group brought together for a singular purpose.
          </p>
        </>
      }
    >
      <ul className={classNames(styles.list, styles.listInline)}>
        {gameData?.characters.length > 0 &&
          gameData?.characters?.map((character) => (
            <DetailTable
              key={"character-" + character.face + "-" + character.suit}
              character={character}
              existingCards={existingCards}
              onLoadItem={handleItemLoad}
            />
          ))}
      </ul>
    </StepForm>
  );
};
export default StepThree;
