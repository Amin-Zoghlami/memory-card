import { useState, useEffect } from "react";
import { getPlayers, shuffleArray } from "./utils.js";
import Scoreboard from "./components/scoreboard.jsx";
import Deck from "./components/deck.jsx";

function App() {
  const [players, setPlayers] = useState([]);
  const score = players.filter((player) => player.isClicked).length;

  useEffect(() => {
    async function fetchPlayers() {
      const playersData = await getPlayers();
      const playersCards = playersData.map((data) => ({
        ...data,
        isClicked: false,
      }));
      setPlayers(playersCards);
      console.log(playersCards);
    }

    fetchPlayers();
  }, []);

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
    <div>
      <Scoreboard score={score} />
      <Deck players={players} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
