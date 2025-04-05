import React from 'react';
import './App.css';

const FlashCard = ({ question, answer, showAnswer }) => {
  return (
    <div className={`card ${showAnswer ? 'flipped' : ''}`}>
      {showAnswer ? answer : question}
    </div>
  );
};

export default FlashCard;
