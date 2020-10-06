import React, { useState } from "react";
import Button from "../Button";
import ButtonSet from "../ButtonSet";
import CardSuit from "../card/CardSuit";
import Header from "../Headers";

export default () => {
  const [choiceStep, setChoiceStep] = useState(0);
  const [currentSelection, setCurrentSelection] = useState("");
  function handleProgression(choice) {
    switch (choiceStep) {
      case 0:
        if (choice === "skip") setChoiceStep((prevState) => (prevState += 1));
        break;

      case 1:
        setChoiceStep((prevState) => (prevState += 1));

        break;

      case 2:
        break;

      default:
        break;
    }
  }
  return (
    <div>
      <Header subheader="Select a Genre">Step One</Header>
      {choiceStep === 0 && (
        <ButtonSet onChange={(choice) => handleProgression(choice)}>
          <Button id="select">Select a Genre</Button>
          <Button id="auto">Choose For Me</Button>
          <Button id="skip">Skip this Step </Button>
        </ButtonSet>
      )}
      {choiceStep === 1 && (
        <ButtonSet onChange={(card) => handleProgression(1, card)}>
          <Button
            prefix={<CardSuit width="30px" suit="heart" />}
            suffix={<CardSuit width="30px" suit="heart" />}
            id="heart"
          >
            Medieval/Fantasy
          </Button>
          <Button
            prefix={<CardSuit width="30px" suit="spade" />}
            suffix={<CardSuit width="30px" suit="spade" />}
            id="spade"
          >
            Science Fiction
          </Button>
          <Button
            prefix={<CardSuit width="30px" suit="diamond" />}
            suffix={<CardSuit width="30px" suit="diamond" />}
            id="diamond"
          >
            Modern/Cyberpunk
          </Button>
          <Button
            prefix={<CardSuit width="30px" suit="club" />}
            suffix={<CardSuit width="30px" suit="club" />}
            id="club"
          >
            Apocalyptic/Post-apocalyptic
          </Button>
        </ButtonSet>
      )}
      {currentSelection && currentSelection}
    </div>
  );
};