import { useEffect, useState } from "react";
import Card from "../components/Card";

// ⭐ Firebase imports
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// --------------------------------------
// Helper: Create shuffled cards
// --------------------------------------
function createShuffledCards(difficulty) {
  let pairCount;

  if (difficulty === "easy") {
    pairCount = 4; // 4 pairs = 8 cards
  } else if (difficulty === "medium") {
    pairCount = 6; // 6 pairs = 12 cards
  } else {
    pairCount = 8; // 8 pairs = 16 cards
  }

  const baseValues = Array.from({ length: pairCount }, (_, i) => i + 1);
  const pairValues = [...baseValues, ...baseValues];

  const cards = pairValues.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));

  // Fisher–Yates shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

// --------------------------------------
// Main Game Component
// --------------------------------------
function Game({ difficulty, onGameOver, onQuit }) {
  const [seconds, setSeconds] = useState(0);
  const [cards, setCards] = useState(() => createShuffledCards(difficulty));
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isBusy, setIsBusy] = useState(false);

  // --------------------------------------
  // Timer
  // --------------------------------------
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // --------------------------------------
  // Card Flip Logic
  // --------------------------------------
  const handleCardClick = (index) => {
    if (isBusy) return;

    const card = cards[index];
    if (card.isFlipped || card.isMatched) return;

    const newCards = cards.map((c, i) =>
      i === index ? { ...c, isFlipped: true } : c
    );

    const newFlipped = [...flippedIndexes, index];

    setCards(newCards);
    setFlippedIndexes(newFlipped);


    if (newFlipped.length === 2) {
      setIsBusy(true);
      setMoves((m) => m + 1);

      const [firstIndex, secondIndex] = newFlipped;
      const firstCard = newCards[firstIndex];
      const secondCard = newCards[secondIndex];

      // Match
      if (firstCard.value === secondCard.value) {
        const updatedCards = newCards.map((c, i) =>
          i === firstIndex || i === secondIndex
            ? { ...c, isMatched: true }
            : c
        );

        setCards(updatedCards);
        setMatchedPairs((p) => p + 1);
        setFlippedIndexes([]);
        setIsBusy(false);
      }


      else {
        setTimeout(() => {
          const resetCards = newCards.map((c, i) =>
            i === firstIndex || i === secondIndex
              ? { ...c, isFlipped: false }
              : c
          );
          setCards(resetCards);
          setFlippedIndexes([]);
          setIsBusy(false);
        }, 800);
      }
    }
  };

  // --------------------------------------
  // Finish Game → Save Score to Firebase
  // --------------------------------------
  const handleFinish = async () => {
    const stats = {
      time: seconds,
      moves,
      matchedPairs,
      difficulty,
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, "scores"), stats);
      console.log("Score saved to Firestore");
    } catch (err) {
      console.error("Error saving score:", err);
    }

    onGameOver(stats);
  };


  const handleReset = () => {
    setCards(createShuffledCards(difficulty));
    setSeconds(0);
    setMoves(0);
    setMatchedPairs(0);
    setFlippedIndexes([]);
    setIsBusy(false);
  };


  return (
    <main className="game">
      <header className="game-header">
        <h2>Game Board</h2>
        <p>Difficulty: {difficulty}</p>
        <p>Time: {seconds}s</p>
        <p>Moves: {moves}</p>
        <p>Matched Pairs: {matchedPairs}</p>

        <div className="game-header-buttons">
          <button onClick={onQuit}>Quit</button>
          <button onClick={handleReset}>Restart</button>
          <button onClick={handleFinish}>Finish Game</button>
        </div>
      </header>

      <section className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            value={card.value}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </section>
    </main>
  );
}

export default Game;
