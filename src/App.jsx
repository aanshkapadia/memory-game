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
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const initializeGame = () => {
    const tempCards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(tempCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setMoves(0);
  }

  // Calls initialize function once
  useEffect(() => {
    initializeGame();
  }, [])

  const handleCardClick = (card) => {

    // Click should not affect flipped or matched cards
    if (card.isFlipped || card.isMatched || isLocked == true) {
      return;
    }

    setMoves((prev) => prev + 1);

    // Flip card upon click
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

    // Check if 2 cards are flipped
    if (flippedCards.length === 1) {
      setIsLocked(true);
      const first_flipped_card = cards[flippedCards[0]];

      // Logic if cards MATCH
      if (card.value == first_flipped_card.value) {
        setTimeout(() => {
          console.log("MATCH!");
          setScore((prev) => prev + 1);
          setMatchedCards((prev) => [...prev, first_flipped_card.id, card.id]);

          // Set isMatched to true for main cards array
          setCards((prev) =>
            prev.map((c) => {
              if ((c.id == card.id) || (c.id == first_flipped_card.id)) {
                return { ...c, isMatched: true }
              } else {
                return c;
              }
            }));
          setFlippedCards([]);
          setIsLocked(false);
        }, 500)
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
          setIsLocked(false);
        }, 500);
      }
    }
  }

  // Render game UI
  return (
    <div className="app-container">
      <GameHeader score={score} moves={moves} resetGame={initializeGame} />
      <div className="cards-grid-container mt-8">
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
