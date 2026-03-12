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

  const [cards, setCards] = useState([]);
  const initializeGame = () => {
    const tempCard = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(tempCard);
  }

  useEffect(() => {
    initializeGame();
  }, [])

  const handleCardClick = (card) => {

    if (card.isFlipped || card.isMatched) {
      return;
    }
    const tempCards = cards.map((i) => {
      if (i.id == card.id) {
        return { ...i, isFlipped: true }
      } else {
        return i;
      }
    })
    setCards(tempCards);
  }

  return (
    <div className="app-container">
      <GameHeader score={3} moves={10} />
      <div className="cards-grid-container mt-10">
        <div className="cards-grid grid justify-center">
          {cards.map((card) => (
            <Card key={card.id} card={card} handleCardClick={handleCardClick} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default App
