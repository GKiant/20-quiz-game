import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import StartScreen from "./components/StartScreen";
import BackgroundImages from "./components/BackgroundImages";
import Quiz from "./components/Quiz";

const App = () => {
  const [isOnStartScreen, setIsOnStartScreen] = useState(true);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const startGame = () => {
    setIsOnStartScreen(false);
  };

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=5");
        const data = await res.json();
        setQuizQuestions(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getQuiz();
  }, []);

  console.log(quizQuestions);

  const getQuizElements = quizQuestions.map((e) => (
    <Quiz
      key={nanoid()}
      id={nanoid()}
      question={e.question}
      correctAnswer={e.correct_answer}
      incorrectAnswers={e.incorrect_answers}
      type={e.type}
    />
  ));

  return (
    <main className="main--container">
      <BackgroundImages />
      {isOnStartScreen ? (
        <StartScreen startGame={startGame} />
      ) : (
        <div className="quiz--container">
          {getQuizElements}
          <button className="check--btn btn">Check answers</button>
        </div>
      )}
    </main>
  );
};

export default App;
