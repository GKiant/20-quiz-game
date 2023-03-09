import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { shuffle, decodedString } from "./utils";
import StartScreen from "./components/StartScreen";
import BackgroundImages from "./components/BackgroundImages";
import Quiz from "./components/Quiz";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [restart, setRestart] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [isCheckAnswers, setIsCheckAnswers] = useState(false);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=5");
        const data = await res.json();

        const mutatedData = data.results.map((result) => {
          const decodedQuestion = decodedString(result.question);
          const decodedCorrectAnswer = decodedString(result.correct_answer);
          const decodedAnswers = result.incorrect_answers.map((answer) => {
            return decodedString(answer);
          });
          const allAnswers = [...decodedAnswers, decodedCorrectAnswer];

          shuffle(allAnswers);

          return {
            groupId: nanoid(),
            question: decodedQuestion,
            correctAnswer: decodedCorrectAnswer,
            answers: allAnswers.map((e) => ({
              value: e,
              id: nanoid(),
              isChosen: false,
            })),
          };
        });
        setQuizData(mutatedData);
      } catch (error) {
        console.log(error);
      }
    };
    getQuiz();
  }, [restart]);

  const quizElements = quizData.map((el) => {
    return (
      <Quiz
        key={el.groupId}
        question={el.question}
        answers={el.answers}
        setQuizData={setQuizData}
        groupId={el.groupId}
        correctAnswer={el.correctAnswer}
        isCheckAnswers={isCheckAnswers}
        setResult={setResult}
      />
    );
  });

  const restartGame = () => {
    setRestart((oldRestart) => !oldRestart);
    setIsCheckAnswers(false);
    setResult(0);
  };

  return (
    <main className="main--container">
      <BackgroundImages />
      {!isStart ? (
        <StartScreen startGame={() => setIsStart(true)} />
      ) : (
        <div className="quiz--container">
          {quizElements}
          {!isCheckAnswers && (
            <button
              onClick={() => setIsCheckAnswers(true)}
              className="check--btn btn"
            >
              Check answers
            </button>
          )}
          {isCheckAnswers && (
            <div className="end--game__footer">
              <h3>You scored {result}/5 correct answers</h3>
              <button onClick={restartGame} className="restart--btn btn">
                Play again
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default App;
