import "../index.css";
import Answer from "./Answer";

const Quiz = ({
  question,
  answers,
  setQuizData,
  groupId,
  correctAnswer,
  isCheckAnswers,
  setResult,
}) => {
  const allAnswersElements = answers.map((answer) => {
    return (
      <Answer
        answerValue={answer.value}
        key={answer.id}
        answerId={answer.id}
        isChosen={answer.isChosen}
        setQuizData={setQuizData}
        groupId={groupId}
        correctAnswer={correctAnswer}
        isCheckAnswers={isCheckAnswers}
        setResult={setResult}
      />
    );
  });

  return (
    <div className="question--container">
      <h2 className="question--title">{question}</h2>
      {allAnswersElements}
      <hr />
    </div>
  );
};

export default Quiz;
