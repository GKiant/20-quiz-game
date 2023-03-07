import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "../index.css";
import Answer from "./Answer";

const Quiz = ({ question, correctAnswer, incorrectAnswers }) => {
  const allAnswers = [...incorrectAnswers, correctAnswer];
  for (let i = allAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
  }

  console.log(correctAnswer);

  const generateNewAnswer = (idx) => {
    return {
      value: allAnswers[idx],
      isChosen: false,
      id: nanoid(),
    };
  };

  const allNewAnswers = () => {
    const newAnswers = [];
    for (let i = 0; i < allAnswers.length; i++) {
      newAnswers.push(generateNewAnswer(i));
    }
    return newAnswers;
  };

  const [answersData, setAnswersData] = useState(allNewAnswers());

  const allAnswersElements = answersData.map((answer) => {
    return (
      <Answer
        answer={answer.value}
        key={nanoid()}
        id={answer.id}
        answersData={answer}
        setAnswersData={setAnswersData}
        isChosen={answer.isChosen}
      />
    );
  });

  return (
    <div className="question--container">
      <h2 className="question--title">{question}</h2>

      <>{allAnswersElements}</>
      <hr />
    </div>
  );
};

export default Quiz;
