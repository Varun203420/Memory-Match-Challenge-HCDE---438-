import { useState } from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Results from "./pages/Results";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [lastStats, setLastStats] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");

  const handleStartGame = (level) => {
    console.log("Starting game with difficulty:", level);
    setDifficulty(level);
    setScreen("game");
  };

  const handleGameOver = (stats) => {
    setLastStats(stats);
    setScreen("results");
  };

  const handleBackHome = () => {
    setScreen("home");
  };

  return (
    <div className="app">
      {screen === "home" && <Home onStartGame={handleStartGame} />}

      {screen === "game" && (
        <Game
          difficulty={difficulty}
          onGameOver={handleGameOver}
          onQuit={handleBackHome}
        />
      )}

      {screen === "results" && (
        <Results
          stats={lastStats}
          onPlayAgain={() => setScreen("game")}
          onBackHome={handleBackHome}
        />
      )}
    </div>
  );
}

export default App;
