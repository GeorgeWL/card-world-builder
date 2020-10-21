import React from "react";
import StepManager from "./components/steps/StepManager";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <h1>World Builder</h1>
      <h2>Steps</h2>
      <ol>
        <li>
          Select a Genre / Choose for me <strong>(optional)</strong>
        </li>
        <li>Generate Characters</li>
        <li>Create Character details</li>
        <li>World Building</li>
        <li>Connections</li>
      </ol>
      <StepManager />
    </div>
  );
}
export const SUIT_MAP = [
  { index: 0, suit: "heart", genre: "Medieval/Fantasy" },
  { index: 1, suit: "spade", genre: "Science Fiction" },
  { index: 2, suit: "diamond", genre: "Modern/Cyberpunk" },
  { index: 3, suit: "club", genre: "Apocalyptic/Post-apocalyptic" }
];
