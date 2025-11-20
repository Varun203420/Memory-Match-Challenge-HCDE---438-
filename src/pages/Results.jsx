function Results({ stats, onPlayAgain, onBackHome }) {
  return (
    <main className="results">
      <h2>Game Results</h2>

      {stats ? (
        <ul>
          <li>Difficulty: {stats.difficulty}</li>
          <li>Time: {stats.time}s</li>
          <li>Moves: {stats.moves}</li>
          <li>Matched Pairs: {stats.matchedPairs}</li>
        </ul>
      ) : (
        <p>No stats available yet.</p>
      )}

      <div className="results-buttons">
        <button onClick={onPlayAgain}>Play Again</button>
        <button onClick={onBackHome}>Back to Home</button>
      </div>
    </main>
  );
}

export default Results;
