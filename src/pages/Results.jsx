import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

function Results({ stats, onPlayAgain, onBackHome }) {
  const [bestScore, setBestScore] = useState(null);

  // ⭐ Load the best score (lowest time) from Firebase
  useEffect(() => {
    async function loadBest() {
      try {
        const q = query(
          collection(db, "scores"),
          orderBy("time", "asc"),
          limit(1)
        );

        const snap = await getDocs(q);

        snap.forEach((doc) => {
          setBestScore(doc.data());
        });
      } catch (err) {
        console.error("Error loading best score:", err);
      }
    }

    loadBest();
  }, []);

  return (
    <main className="results">
      <h2>Game Results</h2>

      {/* ⭐ BEST SCORE SECTION */}
      {bestScore && (
        <section>
          <h3>Best Score (All Players)</h3>
          <ul>
            <li>Time: {bestScore.time}s</li>
            <li>Moves: {bestScore.moves}</li>
            <li>Difficulty: {bestScore.difficulty}</li>
          </ul>
        </section>
      )}

      {/* ⭐ CURRENT GAME RESULTS */}
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

      {/* ⭐ BUTTONS */}
      <div className="results-buttons">
        <button onClick={onPlayAgain}>Play Again</button>
        <button onClick={onBackHome}>Back to Home</button>
      </div>
    </main>
  );
}

export default Results;
