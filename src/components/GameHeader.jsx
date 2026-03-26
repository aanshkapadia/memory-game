export const GameHeader = ({ score, moves, resetGame }) => {
    return (
        <div className="game-header-container flex justify-center">
            <div className="game-header">
                <h1 className="mt-1">Memory Game</h1>
                <div className="stats flex justify-center gap-3 mt-2">
                    <div className="stats__stat-item">
                        <span className="stat-item__stat-label">Score: </span>
                        <span className="stat-item__stat-value">{score}</span>
                    </div>
                    <div className="stats__stat-item">
                        <span className="stat-item__stat-label">Moves: </span>
                        <span className="stat-item__stat-value">{moves}</span>
                    </div>
                </div>
                <button className="mt-3 mb-2" onClick={resetGame}>
                    {" "}
                    Reset Game
                </button>
            </div>
        </div>
    );
};
