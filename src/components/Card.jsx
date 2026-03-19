export const Card = ({ card, handleCardClick }) => {

    return (
        <div
            className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
            onClick={() => handleCardClick(card)}>
            <div className="card-question"> ? </div>
            < div className="card-value" > {card.value}</div >
        </div >
    )
}

