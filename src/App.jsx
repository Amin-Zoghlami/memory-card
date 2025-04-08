import { useState, useEffect } from "react";
import { getPlayers } from "./utils.js";
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
    setPlayers(
      players.map((player) => {
        if (player.id === id) {
          if (player.isClicked) return player;
          return { ...player, isClicked: true };
        }
        return player;
      })
    );
  }
  return (
    <div>
      <Scoreboard score={score} />
      <Deck players={players} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
