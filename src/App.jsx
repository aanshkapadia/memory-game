import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinNotification } from "./components/WinNotification";
import { GameLogic } from "./hooks/GameLogic";

const cardValues = [
    "🐶",
    "🐳",
    "🐰",
    "🦊",
    "🐼",
    "🦉",
    "🦁",
    "🐢",
    "🐶",
    "🐳",
    "🐰",
    "🦊",
    "🐼",
    "🦉",
    "🦁",
    "🐢",
];

// Render game UI
function App() {
    const {
        cards,
        score,
        moves,
        isGameComplete,
        initializeGame,
        handleCardClick,
    } = GameLogic(cardValues);

    return (
        <div className="app-container">
            <GameHeader
                score={score}
                moves={moves}
                resetGame={initializeGame}
            />
            {isGameComplete && <WinNotification moves={moves} />}
            <div className="cards-grid-container mt-8">
                <div className="cards-grid grid justify-center">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            handleCardClick={handleCardClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
