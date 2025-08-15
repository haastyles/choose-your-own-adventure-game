import {useState} from 'react';
import screens from '../data/screens.json';

const usePath = () => {
    const [screen, setScreen] = useState(screens[0]);
    const [options, setOptions] = useState({
        option1: screen.options[0],
        option2: screen.options[1],
        option3: screen.options[2]
    });
    const [ optionCount1, setOptionCount1 ] = useState(0);
    const [ optionCount2, setOptionCount2 ] = useState(0);
    const [ optionCount3, setOptionCount3 ] = useState(0);

    const handleOptionClick = (i) => {
        const nextScreenId = screen.options[i].next;
        const nextScreenType = screen.options[i].type;
        const nextScreen = screens.find(s => s.id === nextScreenId);
        if (typeof nextScreen !== "undefined" && nextScreen !== null) {
            setScreen(nextScreen);
            if (nextScreen.end === false) {
                setOptions({
                    option1: { option: "", next: null },
                    option2: { option: "", next: null },
                    option3: { option: "", next: null }
                });
            }
            setOptions({
                option1: nextScreen.options[0],
                option2: nextScreen.options[1],
                option3: nextScreen.options[2]
            });
        }

        if (nextScreenType === 1 ) {
            setOptionCount1(optionCount1 + 1);
        } else if (nextScreenType === 2) {
            setOptionCount2(optionCount2 + 1);
        } else if (nextScreenType === 3) {
            setOptionCount3(optionCount3 + 1);
        }
    }

    const startOverClick = () => {
        setScreen(screens[0]);
        setOptions({
            option1: screens[0].options[0],
            option2: screens[0].options[1],
            option3: screens[0].options[2]
        });
        setOptionCount1(0);
        setOptionCount2(0);
        setOptionCount3(0);
    }
    return {
        screen,
        options,
        optionCount1,
        optionCount2,
        optionCount3,
        handleOptionClick,
        startOverClick
    };
}

export default usePath;