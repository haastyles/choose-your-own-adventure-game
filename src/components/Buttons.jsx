function Buttons({
    options,
    handleOptionClick
}) {
    console.log("Buttons.jsx ", options);
    
    // Convert options object to array
    const optionsArray = Object.values(options).filter(option => option && option.option);
    
    return (
        <div className="buttons">
            {optionsArray.map((option, index) => (
                <button key={index} className={`option${index + 1}`} onClick={() => handleOptionClick(index)}>
                    {option.option}
                </button>
            ))}
        </div>
    );
};

export default Buttons;