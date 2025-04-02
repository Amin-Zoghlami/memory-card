import { useState, useEffect } from "react";
import { getPlayers } from "./utils.js";
import Deck from "./components/deck.jsx";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const playersData = await getPlayers();
      setPlayers(playersData);
      console.log(playersData);
    }

    fetchPlayers();
  }, []);

  return (
    <div>
      <Deck players={players} />
    </div>
  );
}

export default App;
