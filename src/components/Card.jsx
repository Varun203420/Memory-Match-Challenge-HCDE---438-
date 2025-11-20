function Card({ value, isFlipped, isMatched, onClick }) {
  const handleClick = () => {
    if (!isMatched) {
      onClick();
    }
  };

  const showValue = isFlipped || isMatched;

  return (
    <button
      className={`card ${showValue ? "card--flipped" : ""}`}
      onClick={handleClick}
    >
      {showValue ? value : "?"}
    </button>
  );
}

export default Card;
