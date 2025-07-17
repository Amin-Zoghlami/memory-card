import "../styles/card.css";

export default function Card({ player, handleCardClick }) {
  return (
    <div className="card" onClick={() => handleCardClick(player.id)}>
      <img src={player.img} alt="" />
      <h1>{player.firstName}</h1>
      <h1>{player.lastName}</h1>
    </div>
  );
}
