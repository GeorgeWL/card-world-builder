import React from "react";
import Button from "./components/Button";
import ButtonSet from "./components/ButtonSet";
import CardCorner from "./components/card/CardCorner";
import CardFace from "./components/card/CardFace";
import CardSuit from "./components/card/CardSuit";
import LoadingSpinner from "./components/LoadingSpinner";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      Steps
      <LoadingSpinner />
      <CardCorner number={11} suit="heart" />
      <ButtonSet onChange={(id) => console.log(id)}>
        <Button
          prefix={<CardSuit width="25px" suit="heart" />}
          suffix={<CardSuit width="25px" suit="heart" />}
          id="heart"
          dataTags={{ "data-cy": "cypress" }}
        >
          Test
        </Button>
        <Button
          prefix={<CardSuit width="25px" suit="spade" />}
          suffix={<CardSuit width="25px" suit="spade" />}
          id="spade"
          dataTags={{ "data-cy": "cypress" }}
        >
          Test
        </Button>
        <Button
          prefix={<CardSuit width="25px" suit="diamond" />}
          suffix={<CardSuit width="25px" suit="diamond" />}
          id="diamond"
          dataTags={{ "data-cy": "cypress" }}
        >
          Test
        </Button>
        <Button
          prefix={<CardSuit width="25px" suit="club" />}
          suffix={<CardSuit width="25px" suit="club" />}
          id="club"
          dataTags={{ "data-cy": "cypress" }}
        >
          Test
        </Button>
      </ButtonSet>
      <CardFace suit="heart" number={8} />
      <ol>
        <li>Select a Genre / Choose for me</li>
        <li>Generate Characters</li>
        <li>Create Character details</li>
        <li>World Building</li>
        <li>Connections</li>
      </ol>
    </div>
  );
}
