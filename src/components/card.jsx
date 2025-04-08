export default function Card({ player, handleCardClick }) {
  return (
    <div className="card" onClick={() => handleCardClick(player.id)}>
      <img src={player.img} alt="" />
      <h1>{player.fullName}</h1>
    </div>
  );
}
