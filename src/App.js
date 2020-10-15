import React from "react";
import CardCorner from "./components/card/CardCorner";
import CardFace from "./components/card/CardFace";
import LoadingSpinner from "./components/LoadingSpinner";
import StepOne from "./components/steps/StepOne";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      Steps
      <LoadingSpinner />
      <CardCorner number={11} suit="heart" />
      <StepOne onSubmit={(e) => console.log({ e })} />
      <CardFace suit="heart" number={8} />
      <ol>
        <li>Select a Genre / Choose for me / Skip</li>
        <li>Generate Characters</li>
        <li>Create Character details</li>
        <li>World Building</li>
        <li>Connections</li>
      </ol>
    </div>
  );
}
export const SUIT_MAP = {
  0: { suit: "heart", genre: "Medieval/Fantasy" },
  1: { suit: "spade", genre: "Science Fiction" },
  2: { suit: "diamond", genre: "Modern/Cyberpunk" },
  3: { suit: "club", genre: "Apocalyptic/Post-apocalyptic" }
};
