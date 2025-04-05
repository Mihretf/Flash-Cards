import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';
import './App.css';

const flashcards = [
  { question: "What is closure in JavaScript?", answer: "A closure is when a function remembers its lexical scope even when executed outside of that scope." },
  { question: "What is the difference between var, let, and const?", answer: "'var' is function scoped, 'let' and 'const' are block scoped. 'const' cannot be reassigned." },
  { question: "What is a promise?", answer: "An object representing the eventual completion or failure of an asynchronous operation." },
  { question: "What is hoisting?", answer: "JavaScript's default behavior of moving declarations to the top." },
  // Add more as needed
];

function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const progress = ((index + 1) / flashcards.length) * 100;

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % flashcards.length);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className="container">
      {/* 🌙 Light/Dark Mode Toggle */}
      <div className="toggle-switch">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </div>

      {/* 📖 Flashcard */}
      <FlashCard
        question={flashcards[index].question}
        answer={flashcards[index].answer}
        showAnswer={showAnswer}
      />

      {/* 👇 Show/Hide Answer Button */}
      <button onClick={() => setShowAnswer((prev) => !prev)} style={{ marginTop: "1rem" }}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {/* ⬅️➡️ Navigation */}
      <div className="navigation">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>

      {/* 📊 Progress */}
      <div className="progress-info">
        <span>{Math.round(progress)}%</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <span>{index + 1}/{flashcards.length}</span>
      </div>
    </div>
  );
}

export default App;
