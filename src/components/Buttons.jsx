import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Buttons({
    options,
    handleOptionClick
}) {
    
    const optionsArray = Object.values(options).filter(option => option && option.option);
    return (
        <Stack direction="row" spacing={2} className="buttons">
            {optionsArray.map((option, index) => (
                <Button
                    key={index}
                    variant="contained"
                    color="primary"
                    onClick={() => handleOptionClick(index)}
                    fullWidth
                    sx={{
                        textTransform: 'none',
                        fontSize: '2rem',
                        borderRadius: '100px',
                        maxWidth: '100%', 
                        padding: '1rem 2rem'
                    }}
                >
                    {option.option}
                </Button>
            ))}
        </Stack>
    );
}

export default Buttons;