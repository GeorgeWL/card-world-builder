import React, { useEffect, useState } from "react";
import List from "../List";
import StepForm from "./StepForm";
import DetailListReadOnly from "../details/DetailListReadOnly";
import { drawCardFromDeck } from "../../helpers/drawCards";

const StepFive = ({ onSubmit, onStepBack, gameData }) => {
  const [charactersWithConnections, setCharactersConnections] = useState(
    gameData.characters
  );
  useEffect(() => {
    const connectionsCharacters = gameData.characters.map((character) => ({
      ...character,
      connection: drawCardFromDeck([
        ...character.details,
        ...gameData.characters
      ])
    }));
    setCharactersConnections(connectionsCharacters);
  }, [gameData]);
  return (
    <StepForm
      // onSubmit={onSubmit}
      onReset={onStepBack}
      header="Step Five"
      subheader="Connections"
      instructions={
        <>
          <p>
            Next you will connect these characters together with relationships.
            This can show why all the characters are in the same location, part
            of the same faction, or facing the same challenge in your story or
            game.
          </p>
          <p>
            Without connections or relationships your characters might not have
            any reason to work together.
          </p>
          <p>
            The Card between each character details is the relationships or
            connections between the characters. If there are more than 2
            characters there will be an extra card after the last character,
            this introduces a connection between the rightmost character and the
            leftmost character.
          </p>
          <p>
            The suit of the card between the characters determines the nature of
            this connection.
          </p>
          <List
            type="ul"
            listStyle="none"
            items={[
              "♣ - The characters share a skill",
              "♦ - The characters share a heritage",
              "♥ - The character share a relationship",
              "♠ - The characters share a trait"
            ]}
          />
          <p>
            Select a suitable detail between the characters that they can share,
            of the same suit as the connection
          </p>
        </>
      }
    >
      <DetailListReadOnly characters={charactersWithConnections} />
    </StepForm>
  );
};
export default StepFive;
