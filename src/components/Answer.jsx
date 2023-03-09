import { useEffect } from "react";

const Answer = ({
  answerValue,
  answerId,
  isChosen,
  setQuizData,
  groupId,
  correctAnswer,
  isCheckAnswers,
  setResult,
}) => {
  const toggleAnswer = (id, groupId) => {
    if (!isCheckAnswers) {
      setQuizData((oldData) =>
        oldData.map((data) => ({
          ...data,
          answers: data.answers.map((answer) => {
            if (data.groupId === groupId) {
              if (id === answer.id) {
                return {
                  ...answer,
                  isChosen: true,
                };
              } else {
                return {
                  ...answer,
                  isChosen: false,
                };
              }
            } else {
              return {
                ...answer,
              };
            }
          }),
        }))
      );
    }
  };

  useEffect(() => {
    if (isCheckAnswers && isChosen && correctAnswer === answerValue) {
      setResult((oldResult) => oldResult + 1);
    }
  }, [isCheckAnswers]);

  let styles = {};
  const getStyles = (bgColor, border, opacity) => {
    return (styles = {
      backgroundColor: bgColor,
      border: border,
      opacity: opacity,
    });
  };
  if (isCheckAnswers) {
    if (correctAnswer === answerValue) {
      getStyles("#94d7a2", "1px solid #94d7a2");
    } else if (isChosen && correctAnswer !== answerValue) {
      getStyles("#f8bcbc", "1px solid #f8bcbc", "0.5");
    } else {
      getStyles("#f5f7fb", "1px solid #d6dbf5", "0.5");
    }
  } else {
    getStyles(`${isChosen ? "#d6dbf5" : "#f5f7fb"}`, "1px solid #d6dbf5");
  }

  return (
    <button
      onClick={() => toggleAnswer(answerId, groupId)}
      style={styles}
      className="answer--btn"
    >
      {answerValue}
    </button>
  );
};

export default Answer;
