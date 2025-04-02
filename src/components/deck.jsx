import Card from "./card.jsx";
import "../styles/deck.css";

export default function Deck({ players }) {
  return (
    <div className="deck">
      {players.map((player) => (
        <Card player={player} />
      ))}
    </div>
  );
}
