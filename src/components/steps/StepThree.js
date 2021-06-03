import React from "react";
import styles from "../../styles/details.module.scss";
import DetailList from "../details/DetailList";
import StepForm from "./StepForm";
import classNames from "classnames";
const StepThree = ({ gameData, onSubmit, onStepBack }) => {
  function handleSubmit(evt) {
    onSubmit(evt);
  }
  return (
    <StepForm
      // disableSubmit={!genreSelection || genreSelection.length < 1}
      // showSubmit={choiceStep !== 0}
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
        {gameData?.characters &&
          gameData.characters.map((character) => (
            <DetailList
              key={character.face + "-" + character.suit}
              character={character}
              existingCards={gameData.characters}
            />
          ))}
      </ul>
    </StepForm>
  );
};
export default StepThree;
