import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="+380(##) ###-##-##"
            definitions={{
                '#': /[0-9]/,
                '0': /[0]/
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function MyPhoneInput({disabled, onChange, number}) {




    return (
              <FormControl disabled={disabled}  variant="standard">
                <InputLabel htmlFor="formatted-text-mask-input">Enter your phone</InputLabel>
                <Input
                    value={number.textmask}
                    onChange={onChange}
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                />
            </FormControl>
    );
}