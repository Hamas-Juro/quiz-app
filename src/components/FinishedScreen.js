function FinishedScreen({ points, maxPoints, highScore, dispatch }) {
  const percentage = Math.ceil((points / maxPoints) * 100);

  let emoji;
  if (percentage === 100) emoji = "🥰";
  if (percentage >= 80 && percentage < 100) emoji = "🤩";
  if (percentage >= 70 && percentage < 80) emoji = "🤯";
  if (percentage >= 60 && percentage < 70) emoji = "😮";
  if (percentage >= 50 && percentage < 60) emoji = "😨";
  if (percentage >= 40 && percentage < 50) emoji = "😰";
  if (percentage >= 30 && percentage < 40) emoji = "😢";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You Scored <strong>{points}</strong> out of{" "}
        {maxPoints} points. That's a{percentage} %
      </p>
      <p>HighScore = {highScore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Play Again
      </button>
    </>
  );
}

export default FinishedScreen;
