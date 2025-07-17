import "../styles/reset.css";

export default function Reset({ resetGame }) {
  return (
    <button className="reset" onClick={resetGame}>
      New Game
    </button>
  );
}
