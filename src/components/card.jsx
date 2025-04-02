export default function Card({ player }) {
  return (
    <div className="card">
      <img src={player.img} alt="" />
      <h1>{player.fullName}</h1>
    </div>
  );
}
