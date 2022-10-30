import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MySelect = ({options, defaultValue, value, onChange}) => {


    return (<>

            <Box >
                <FormControl  variant="standard"  sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select-label">{defaultValue}</InputLabel>
                    <Select
                        labelId="select-label"
                        id="simple-select"
                        value={value}
                        label="Sort by"
                        onChange={event => onChange(event.target.value)}
                    >
                        {options.map(option =>
                            <MenuItem key={option.value} value={option.value}>
                                {option.name}
                            </MenuItem>
                        )}

                    </Select>
                </FormControl>
            </Box>


        </>
    );
};

export default MySelect;
