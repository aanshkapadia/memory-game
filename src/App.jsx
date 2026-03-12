import React, { useState, useEffect } from 'react';
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader"

const cardValues = [
  "🍎",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍓",
  "🍇",
  "🍒",
  "🍎",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍓",
  "🍇",
  "🍒",
];

function App() {

  const [cards, setCards] = useState();
  const initializeGame = () => {
    const tempCard = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(tempCard);
    // console.log(tempCard)
  }

  useEffect(() => {
    initializeGame();
  }, [])

  return (
    <div className="app-container">
      <GameHeader score={3} moves={10} />
      <div className="cards-grid-container mt-10">
        <div className="cards-grid grid justify-center">
          {cardValues.map((value) => (
            <Card card={value} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default App
