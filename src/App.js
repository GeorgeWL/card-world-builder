import React from "react";
import StepManager from "./components/steps/StepManager";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <header>
        <h1>
          World Builder
          <br />
          <small>A single player tabletop game about building a world</small>
        </h1>
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
      </header>
      <main>
        <StepManager />
      </main>
      <footer>
        <p>
          Adapted from{" "}
          <a href="https://sohkrates.itch.io/world-maker">World Maker</a> by
          Michael Elliot{" "}
          <small>
            (
            <a href="http://twitter.com/kindelingboy">
              <img
                src=""
                title="@kindelingboy"
                alt="http://twitter.com/kindelingboy"
              />
            </a>
            )
          </small>
          .
        </p>
        <p>
          Adaptation by <a href="https://georgewl.dev">George Langham</a>{" "}
          <small>(GeorgeWL)</small>.
        </p>
        <p>
          Please Support the original creator by purchasing the game, or
          donating to their{" "}
          <a href="http://www.patreon.com/notwriting">Patreon</a>.
        </p>
      </footer>
    </div>
  );
}
export const SUIT_MAP = [
  { index: 0, suit: "heart", genre: "Medieval/Fantasy" },
  { index: 1, suit: "spade", genre: "Science Fiction" },
  { index: 2, suit: "diamond", genre: "Modern/Cyberpunk" },
  { index: 3, suit: "club", genre: "Apocalyptic/Post-apocalyptic" }
];
