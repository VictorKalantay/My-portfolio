import * as React from 'react';
import { red, green, blue, orange, grey} from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import useThemeChange from "../../hooks/useThemeChange";

export default function MyRadioBtn() {
    const localColorScheme = localStorage.getItem('colorScheme')

    const [selectedValue, setSelectedValue] = React.useState(localColorScheme || 'Red' )

    const btnBg = 'radial-gradient(circle,   rgba(255,255,255,1) 20%, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 60%)'

    const { handleColorChangeOnClick} = useThemeChange()





    const handleChange = (event) => {

        setSelectedValue(event.target.value);
        localStorage.setItem('colorScheme', event.target.value)
        handleColorChangeOnClick(event.target.value)
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <div>
            <Radio {...controlProps('Red')}
                   sx={{
                       background: btnBg,
                       color: red[700],
                       '&.Mui-checked': {
                           color: red[600],
                       },
                   }}
            />
            <Radio {...controlProps('Green')}
                   sx={{
                       background: btnBg,
                       color: green[700],
                       '&.Mui-checked': {
                           color: green[600],
                       },
                   }}/>
            <Radio {...controlProps('Blue')}
                   sx={{
                       background: btnBg,
                       color: blue[700],
                       '&.Mui-checked': {
                           color: blue[600],
                       },
                   }}
            />
            <Radio {...controlProps('Orange')}
                   sx={{
                       background: btnBg,
                       color: orange[700],
                       '&.Mui-checked': {
                           color: orange[600],
                       },
                   }}
            />
            <Radio
                {...controlProps('Grey')}
                sx={{
                    background: btnBg,
                    color: grey[900],
                    '&.Mui-checked': {
                        color: grey[700],
                    },
                }}
            />
        </div>
    );
}
