import { useState, useEffect } from "react";
import { getPlayers, shuffleArray } from "./utils.js";
import Scoreboard from "./components/scoreboard.jsx";
import Reset from "./components/reset.jsx";
import Deck from "./components/deck.jsx";
import mlbLogo from "./assets/MLB.png";
import "./styles/app.css";

function App() {
  const [players, setPlayers] = useState([]);
  const score = players.filter((player) => player.isClicked).length;
  const [highScore, setHighScore] = useState(0);

  async function fetchPlayers() {
    const playersData = await getPlayers();
    const playersCards = playersData.map((data) => ({
      ...data,
      isClicked: false,
    }));
    setPlayers(playersCards);
    console.log(playersCards);
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  function handleCardClick(id) {
    const clickedPlayer = players.find((player) => player.id === id);

    if (clickedPlayer.isClicked) {
      const updatedPlayers = players.map((player) => ({
        ...player,
        isClicked: false,
      }));
      const shuffledPlayers = shuffleArray(updatedPlayers);
      setPlayers(shuffledPlayers);
      return;
    }

    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, isClicked: true } : player
    );

    const shuffledPlayers = shuffleArray(updatedPlayers);

    setPlayers(shuffledPlayers);
  }

  return (
    <div className="app">
      <header>
        <img className="logo" src={mlbLogo} alt="MLB" />
        <h1 className="title">MLB Memory Game</h1>
        <p>Don't click on the same player twice</p>
      </header>
      <div className="feature">
        <Scoreboard score={score} highScore={highScore} />
        <Reset resetGame={fetchPlayers} />
      </div>
      <div className="game">
        {score >= 15 ? (
          <div className="win">
            <img
              src="https://media1.tenor.com/m/oogAVwOQkN4AAAAC/mike-trout-los-angeles-angels.gif"
              alt="Mike Trout Los Angeles Angels"
            />
            <h1>YOU WIN!</h1>
          </div>
        ) : (
          <Deck players={players} handleCardClick={handleCardClick} />
        )}
      </div>
    </div>
  );
}

export default App;
