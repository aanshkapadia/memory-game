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
  const [flippedCards, setFlippedCards] = useState([]);

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

    // Set flipped card value to true onclick
    const tempCards = cards.map((i) => {
      if (i.id == card.id) {
        return { ...i, isFlipped: true }
      } else {
        return i;
      }
    })
    setCards(tempCards);

    const flippedCardsTemp = [...flippedCards, card.id];
    setFlippedCards(flippedCardsTemp);
    console.log(flippedCards);


    // Check if flipped cards MATCH
    if (flippedCards.length === 1) {
      const first_flipped_card = cards[flippedCards[0]];
      if (card.value == first_flipped_card.value) {
        console.log("MATCH!");
      }

      // Flip cards back if not a match
      else {
        setTimeout(() => {
          const flipCardsBack = cards.map((j) => {
            if (flippedCards.includes(j.id)) {
              console.log(j)
              return { ...j, isFlipped: false }
            } else {
              return j;
            }
          });
          setCards(flipCardsBack);
          setFlippedCards([]);
        }, 500);
      }
    }
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
