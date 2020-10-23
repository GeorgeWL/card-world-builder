import React, { useState } from "react";
import { SUIT_MAP } from "../../helpers/generateCard";
import { getRandomInt } from "../../helpers/numberFunctions";
import Button from "../buttons/Button";
import ButtonSet from "../buttons/ButtonSet";
import CardSuit from "../card/CardSuit";
import Label from "../Label";
import StepForm from "./StepForm";

export default ({ onSubmit }) => {
  const [choiceStep, setChoiceStep] = useState(0);
  const [genreSelection, setGenreSelection] = useState("");
  const [optionChoice, setOptionSelection] = useState("");
  const isSelect = choiceStep === 1 && optionChoice === "select";
  const isAuto = choiceStep === 1 && optionChoice === "auto";
  const randomSuit = SUIT_MAP[getRandomInt(4)];

  function handleProgression(choice) {
    setGenreSelection("");
    switch (choiceStep) {
      case 0:
        if (choice === "skip") {
          onSubmit("skip");
        }
        if (choice === "auto") {
          setChoiceStep(1);
          setGenreSelection(randomSuit);
        }
        if (choice === "select") {
          setChoiceStep(1);
        }
        setOptionSelection(choice);
        break;
      case 1:
        if (choice === "back") {
          setChoiceStep(0);
        }
        const selectedChoice = SUIT_MAP[choice];
        setGenreSelection(selectedChoice);
        break;
      default:
        break;
    }
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    if (genreSelection) {
      onSubmit(genreSelection);
    }
  }
  function handleReset(evt) {
    evt.preventDefault();
    setChoiceStep((prevStep) => --prevStep);
    setGenreSelection("");
  }
  return (
    <StepForm
      disableSubmit={!genreSelection || genreSelection.length < 1}
      showSubmit={choiceStep !== 0}
      showCancel={choiceStep !== 0}
      onSubmit={handleSubmit}
      onReset={handleReset}
      header="Step One"
      subheader="Select a Genre"
      instructions={
        <>
          If you don’t have a genre of story or type of world in mind you may
          generate one by pressing <strong>Choose for Me</strong>.<br /> You may
          also select one of the genres, or skip this step entirely and let the
          characters determine the genre as you play.
        </>
      }
    >
      {isSelect ? (
        <ButtonSet onChange={(card) => handleProgression(card)}>
          <Button
            prefix={<CardSuit width="30px" suit="heart" />}
            suffix={<CardSuit width="30px" suit="heart" />}
            id={0}
          >
            {SUIT_MAP[0].genre}
          </Button>
          <Button
            prefix={<CardSuit width="30px" suit="spade" />}
            suffix={<CardSuit width="30px" suit="spade" />}
            id={1}
          >
            {SUIT_MAP[1].genre}
          </Button>
          <Button
            prefix={<CardSuit width="30px" suit="diamond" />}
            suffix={<CardSuit width="30px" suit="diamond" />}
            id={2}
          >
            {SUIT_MAP[2].genre}
          </Button>
          <Button
            prefix={<CardSuit width="30px" suit="club" />}
            suffix={<CardSuit width="30px" suit="club" />}
            id={3}
          >
            {SUIT_MAP[3].genre}
          </Button>
        </ButtonSet>
      ) : (
        isAuto && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CardSuit suit={randomSuit.suit} width="50px" />
            <Label>{randomSuit.genre}</Label>
          </div>
        )
      )}
      {choiceStep === 0 && (
        <ButtonSet onChange={(choice) => handleProgression(choice)}>
          <Button id="select">Select a Genre</Button>
          <Button id="auto">Choose For Me</Button>
          <Button id="skip">Skip this Step </Button>
        </ButtonSet>
      )}
    </StepForm>
  );
};
