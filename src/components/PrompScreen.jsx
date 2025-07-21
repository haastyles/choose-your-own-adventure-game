import Buttons from './Buttons.jsx';
import usePath from '../hooks/usePath.jsx';

function PromptScreen() {
    const { 
        screen,
        options,
        handleOptionClick,
        startOverClick
    } = usePath();

    if (screen.end) {
        return (
            <div className="prompt-screen">
                <h1>{screen.text}</h1>
                <button className="start-over" onClick={startOverClick}>Play Again</button>
            </div>
        );
    } else {
        return (
            <div className="prompt-screen">
                <h1>{screen.text}</h1>
                <Buttons
                    options={options}
                    handleOptionClick={handleOptionClick}
                />
            </div>
        );
    }
}

export default PromptScreen;