export const GameHeader = ({ score, moves }) => {
    return (
        <div className="game-header-container flex justify-center">
            <div className="game-header">
                <h1>Memory Game</h1>
                <div className="stats flex justify-center gap-3 mt-1">
                    < div className="stats__stat-item" >
                        <span className="stat-item__stat-label">Score: </span>
                        <span className="stat-item__stat-value">{score}</span>
                    </div >
                    <div className="stats__stat-item">
                        <span className="stat-item__stat-label">Moves: </span>
                        <span className="stat-item__stat-value">{moves}</span>
                    </div>
                </div >
            </div >
        </div>
    );
}