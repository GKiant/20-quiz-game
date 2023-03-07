import { useState } from "react";

const Answer = ({ answer, answersData, setAnswersData, isChosen }) => {
  const toggleAnswer = (event) => {
    setAnswersData((oldData) =>
      oldData.map((data) => {
        return data.value === event.target.innerText
          ? { ...data, isChosen: true }
          : { ...data, isChosen: false };
      })
    );
  };

  const style = {
    backgroundColor: isChosen ? "#d6dbf5" : "#f5f7fb",
    border: "1px solid #d6dbf5",
  };

  return (
    <button
      onClick={(event) => toggleAnswer(event)}
      style={style}
      className="answer--btn"
    >
      {answer}
    </button>
  );
};

export default Answer;
