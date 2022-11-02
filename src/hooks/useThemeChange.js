import React from 'react';

const useThemeChange = () => {

    let colorScheme = localStorage.getItem('colorScheme')


    const handleThemeChangeFromStorage = () => {
        const isDark = localStorage.getItem("theme") === "true";
        if(isDark) {
            document.documentElement.style.setProperty('--secondaryColor', `var(--secondaryColorDark)`)
            document.documentElement.style.setProperty('--logoText', `var(--Dark)`)
            document.documentElement.style.setProperty('--indicator', `var(--Dark)`)
            document.documentElement.style.setProperty('--iconColor', `var(--iconColorDark)`)
            document.documentElement.style.setProperty('--primaryColor', `var(--Dark)`)
        }
    }
    const handleThemeChangeOnClick = (theme) => {
        document.documentElement.style.setProperty('--secondaryColor', `var(--secondaryColor${theme})`)
        document.documentElement.style.setProperty('--indicator', `var(--${theme})`)
        document.documentElement.style.setProperty('--iconColor', `var(--iconColor${theme})`)
        document.documentElement.style.setProperty('--primaryColor', `var(--${theme})`)



    }





    const handleColorChangeFromStorage = () => {
        if (colorScheme) {
            document.documentElement.style.setProperty('--centralColor', `var(--centralColor${colorScheme})`);
            document.documentElement.style.setProperty('--centralColorTransparent', `var(--centralColorTransparent${colorScheme})`);
            if(colorScheme!== 'Grey') {
                document.documentElement.style.setProperty('--firstLetter', `var(--firstLetter${colorScheme})`)
                document.documentElement.style.setProperty('--firstLetterOnWhite', `var(--firstLetterOnWhite${colorScheme})`)
            }
        }
    }

    const handleColorChangeOnClick = (colorScheme) => {
        document.documentElement.style.setProperty('--centralColor', `var(--centralColor${colorScheme})`)
        document.documentElement.style.setProperty('--centralColorTransparent', `var(--centralColorTransparent${colorScheme})`);
        if(colorScheme!== 'Grey') {
            document.documentElement.style.setProperty('--firstLetter', `var(--firstLetter${colorScheme})`)
            document.documentElement.style.setProperty('--firstLetterOnWhite', `var(--firstLetterOnWhite${colorScheme})`)
        }
    }



    return {handleThemeChangeFromStorage, handleThemeChangeOnClick, handleColorChangeFromStorage, handleColorChangeOnClick}
};

export default useThemeChange;
