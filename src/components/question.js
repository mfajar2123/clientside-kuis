import React from 'react';
import '../style.css'

const Question = ({ question, currentQuestion, handleAnswerOptionClick }) => {
  return (
    <div className="question-container">
      <h2 className='quiz-question'>{question.question}</h2>
      <div className="option-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => handleAnswerOptionClick(option.isCorrect)}
          >
            {option.option}
          </button>
        ))}
      </div>
      <div className="question-progress">
        Pertanyaan {currentQuestion + 1 } dari 10
      </div>
    </div>
  );
};

export default Question;
