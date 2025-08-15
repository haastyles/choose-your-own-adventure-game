
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
        if (optionCount1 / totalOptions > 0.5) {
            if (optionCount1 / totalOptions > 0.7) {
                return pasta[0];
            } else if (optionCount3 > optionCount2) {
                return pasta[2]
            } else {
                return pasta[1]
            }
        } else if (optionCount2 / totalOptions > 0.5) {
            if (optionCount2 / totalOptions > 0.7) {
                return pasta[4];
            } else if (optionCount1 > optionCount3) {
                return pasta[3]
            } else {
                return pasta[5]
            }
        } else if (optionCount3 / totalOptions > 0.5) {
            if (optionCount3 / totalOptions > 0.7) {
                return pasta[8];
            } else if (optionCount1 > optionCount2) {
                return pasta[6]
            } else {
                return pasta[7]
            }
        } else {
            return pasta[4];
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
                    variant="body1"
                    color="text.secondary"
                >
                    Total Options: {totalOptions}
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    color="primary"
                >
                    {Array.isArray(pastaResult)
                        ? pastaResult.join(', ')
                        : Object.values(pastaResult).join(', ')
                    }
                </Typography>
                <Button
                    variant="contained"
                    onClick={startOverClick}
                    sx={{ borderRadius: '999px', px: 4 }}
                >
                    Play Again
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