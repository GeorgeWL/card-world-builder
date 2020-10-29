import React from "react";
import StepManager from "./components/steps/StepManager";
import "./styles.css";
import twitterLogo from "./assets/twitter_logo_blue.svg";
export default function App() {
  return (
    <div className="App">
      <header>
        <h1>
          World Builder
          <br />
          <small>A single player game about building a world</small>
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
          <a
            href="http://twitter.com/kindelingboy"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="25px"
              src={twitterLogo}
              title="@kindelingboy"
              alt="http://twitter.com/kindelingboy"
            />
          </a>
        </p>
        <p>
          Adaptation by{" "}
          <a href="https://georgewl.dev" target="_blank" rel="noreferrer">
            George Langham
          </a>
        </p>
        <p>
          Please Support the original creator by purchasing the game, or
          donating to their{" "}
          <a
            href="http://www.patreon.com/notwriting"
            target="_blank"
            rel="noreferrer"
          >
            Patreon
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
