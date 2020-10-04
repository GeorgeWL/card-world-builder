import React from "react";
import CardCorner from "./components/CardCorner";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      Steps
      <CardCorner number={11} suit="heart" />
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
