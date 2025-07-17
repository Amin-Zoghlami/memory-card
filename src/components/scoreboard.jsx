export default function Scoreboard({ score, highScore }) {
  return (
    <div className="score">
      <h1>Score: {score}</h1>
      <h1>High Score: {highScore} </h1>
    </div>
  );
}
