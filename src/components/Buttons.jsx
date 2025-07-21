function Buttons({
    options,
    handleOptionClick,
    endGame,
    startOverClick
}) {
    if (endGame === true) {
        return (
            <>
                <div className="end-game">Game Over</div>
                <button onClick={startOverClick()}>Play Again?</button>
            </> 
        );
    } else {
        return (
            <div className="buttons">
                <button className="option1" onClick={() => handleOptionClick(0)}>{options.option1.option}</button>
                <button className="option2" onClick={() => handleOptionClick(1)}>{options.option2.option}</button>
                <button className="option3" onClick={() => handleOptionClick(2)}>{options.option3.option}</button>
            </div>
        );
    }
};

export default Buttons;