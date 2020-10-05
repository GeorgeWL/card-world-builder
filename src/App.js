import React from "react";
import Button from "./components/Button";
import CardCorner from "./components/card/CardCorner";
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
      <Button
        prefix={<CardSuit width="25px" suit="heart" />}
        suffix={<CardSuit width="25px" suit="heart" />}
      >
        Test
      </Button>
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
