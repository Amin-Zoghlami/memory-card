import Card from "./card.jsx";
import "../styles/deck.css";

export default function Deck({ players, handleCardClick }) {
  return (
    <div className="deck">
      {players.map((player) => (
        <Card player={player} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
}
