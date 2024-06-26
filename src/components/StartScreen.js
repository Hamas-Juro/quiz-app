function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome To react Quiz</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
