import "../index.css";

const StartScreen = ({ startGame }) => {
  return (
    <div>
      <h1 className="title">Quizboss</h1>
      <h3 className="intro">
        Do you have what it takes to become the Quizboss?
      </h3>
      <button className="start--btn btn" onClick={startGame}>
        Become the Quizboss
      </button>
    </div>
  );
};

export default StartScreen;
