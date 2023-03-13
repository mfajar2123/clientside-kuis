import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './question.js';
import Result from './result.js';
import '../style.css'

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/questions')
      .then(response => {
        setQuestions(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    const updatedSelectedAnswers = [...selectedAnswers, { answer: isCorrect }];
    setSelectedAnswers(updatedSelectedAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return <Result selectedAnswers={selectedAnswers} />;
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Question
      question={questions[currentQuestion]}
      currentQuestion={currentQuestion}
      handleAnswerOptionClick={handleAnswerOptionClick}
    />
  );
};

export default QuestionList;
