function Home({ onStartGame }) {
  const handleClick = (level) => {
    onStartGame(level);
  };

  return (
    <main className="home">
      <h1>Memory Match Challenge</h1>
      <p>
        Flip cards to find all matching pairs in the fewest moves and shortest
        time.
      </p>

      <h2>Select Difficulty</h2>
      <div className="difficulty-buttons">
        <button onClick={() => handleClick("easy")}>Easy</button>
        <button onClick={() => handleClick("medium")}>Medium</button>
        <button onClick={() => handleClick("hard")}>Hard</button>
      </div>
    </main>
  );
}

export default Home;
