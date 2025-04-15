import Card from "./card.jsx";
import "../styles/deck.css";

export default function Deck({ players, handleCardClick }) {
  return (
    <div className="deck">
      {players.map((player) => (
        <Card
          key={player.id}
          player={player}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
