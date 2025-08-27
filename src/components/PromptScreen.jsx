
import Buttons from './Buttons.jsx';
import usePath from '../hooks/usePath.jsx';
import pasta from '../data/pastaShapes.json';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function PromptScreen() {
    const { 
        screen,
        options,
        optionCount1,
        optionCount2,
        optionCount3,
        handleOptionClick,
        startOverClick
    } = usePath();

    const totalOptions = optionCount1 + optionCount2 + optionCount3 + 1;
    const result = ({
        totalOptions,
        optionCount1,
        optionCount2,
        optionCount3
    }) => {
        if (optionCount1 / totalOptions > 0.35) {
            if (optionCount1 / totalOptions > 0.5) {
                return {
                        shape: pasta[0].name,
                        alignment: pasta[0].alignment
                    };
            } else if (optionCount3 > optionCount2) {
                return {
                    shape: pasta[2].name,
                    alignment: pasta[2].alignment
                };
            } else {
                return {
                    shape: pasta[1].name,
                    alignment: pasta[1].alignment
                };
            }
        } else if (optionCount2 / totalOptions > 0.35) {
            if (optionCount2 / totalOptions > 0.5) {
                return {
                    shape: pasta[4].name,
                    alignment: pasta[4].alignment
                };
            } else if (optionCount1 > optionCount3) {
                return {
                    shape: pasta[3].name,
                    alignment: pasta[3].alignment
                };
            } else {
                return {
                    shape: pasta[5].name,
                    alignment: pasta[5].alignment
                };
            }
        } else if (optionCount3 / totalOptions > 0.35) {
            if (optionCount3 / totalOptions > 0.5) {
                return {
                    shape: pasta[8].name,
                    alignment: pasta[8].alignment
                };
            } else if (optionCount1 > optionCount2) {
                return {
                    shape: pasta[6].name,
                    alignment: pasta[6].alignment
                };
            } else {
                return {
                    shape: pasta[7].name,
                    alignment: pasta[7].alignment
                };
            }
        } else {
            return {
                shape: pasta[4].name,
                alignment: pasta[4].alignment
            };
        }
    }

    if (screen.end) {
        const pastaResult = result({ totalOptions, optionCount1, optionCount2, optionCount3 });
        return (
            <Box
                className="prompt-screen"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="80vh"
                gap={3}
            >
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                >
                    {screen.text}
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                >
                    <span>What pasta shape are you? </span>
                    <Typography variant="h4" sx={{ color: 'primary.dark'}}>{pastaResult.shape.toUpperCase()}</Typography>
                    <br />
                    <span>Your alignment: </span>
                    <Typography variant="h4" sx={{ color: 'secondary.dark'}}>{pastaResult.alignment.toUpperCase()}</Typography>
                    <br />
                    <Typography
                        variant="body1"
                        color="text.secondary"
                    >
                        Total decisions made: {totalOptions}
                    </Typography>
                </Typography>
                <Button
                    variant="contained"
                    onClick={startOverClick}
                    sx={{
                        textTransform: 'none',
                        fontSize: '1rem',
                        borderRadius: '100px',
                        maxWidth: '100%', 
                        padding: '1rem 1rem'
                    }}
                >
                    PLAY AGAIN
                </Button>
            </Box>
        );
    } else {
        return (
            <Box
                className="prompt-screen"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="80vh"
                gap={3}
            >
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                >
                    {screen.text}
                </Typography>
                <Buttons
                    options={options}
                    handleOptionClick={handleOptionClick}
                />
            </Box>
        );
    }
}

export default PromptScreen;