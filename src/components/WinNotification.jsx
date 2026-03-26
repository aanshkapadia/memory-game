export const WinNotification = ({ moves }) => {
    return (
        <div className="win-message mt-6">
            <h2 className="text-xl font-bold"> Congratulations!</h2>
            <p className="mt-2">You completed the game in {moves} moves.</p>
        </div>
    );
};
