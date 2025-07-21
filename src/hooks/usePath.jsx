import {useState} from 'react';
import screens from '../data/screens.json';

const usePath = () => {
    const [screen, setScreen] = useState(screens[0]);
    const [options, setOptions] = useState({
        option1: screen.options[0],
        option2: screen.options[1],
        option3: screen.options[2]
    });

    const handleOptionClick = (i) => {
        const nextScreenId = screen.options[i].next;
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
    }

    const startOverClick = () => {
        setScreen(screens[0]);
        setOptions({
            option1: screens[0].options[0],
            option2: screens[0].options[1],
            option3: screens[0].options[2]
        });
    }
    return { screen, options, handleOptionClick, startOverClick };
}

export default usePath;