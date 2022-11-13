import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MyPhoneInput from "../UI/MyPhoneInput";
import Button from '@mui/material/Button';
import useFormSubmit from "../../hooks/useFormSubmit";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Form = () => {

    const {SendFeedback} = useFormSubmit('')

    const [phoneNumber, setPhoneNumber] = useState({
        textmask: '',
        numericFormat: '1320',
    });
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarType, setSnackbarType] = useState('success')
    const [snackbarMessage, setSnackbarMessage] = useState('qwe')
    const [nameField, setNameField] = useState(false)
    const [messageField, setMessageField] = useState(false)


    const onChangePhoneField = (event) => {
        setPhoneNumber({
            ...phoneNumber,
            [event.target.name]: event.target.value,
        });
    };


    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };


    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        if (phoneNumber.textmask.length !== 18) {
            setOpenSnackbar(true);
            setSnackbarType('error')
            setSnackbarMessage('Please enter valid phone number')
        } else if (name.length !== 0 && message.length !== 0) {
            SendFeedback('/feedback', name, phoneNumber.textmask, message)
            setName('')
            setMessage('')
            setPhoneNumber({
                textmask: '',
                numericFormat: '1320',
            })
            setIsDisable(() => true)
            setOpenSnackbar(true);
            setSnackbarType('success')
            setSnackbarMessage('Thank you. You feedback was send')
        } else if (nameField && messageField) {
            SendFeedback('/feedback', name, phoneNumber.textmask, message)
            setName('')
            setMessage('')
            setPhoneNumber({
                textmask: '',
                numericFormat: '1320'
            })
            setIsDisable(() => true)
            setOpenSnackbar(true);
            setSnackbarType('success')
            setSnackbarMessage('Thank you. You feedback was send')
        } else {
            if (name.length === 0 && !nameField) {
                    if(message.length !== 0 ) {
                        setMessageField(true)
                    }
                setNameField(true)
                setOpenSnackbar(true);
                setSnackbarType('warning')
                setSnackbarMessage('Are you sure you want to send a message without a name')
            } else if (message.length === 0 && !messageField) {
                setNameField(true)
                setMessageField(true)
                setOpenSnackbar(true);
                setSnackbarType('warning')
                setSnackbarMessage('Are you sure you want to send a empty message')
            }  else {
                setMessageField(true)
            }
        }

    }


    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '40%',
                gap: '30px',
                color: 'warning.main',
                colorScheme: 'light',
                '@media (max-width: 991px)': {
                 width: '60%'
            },
                '@media (max-width: 479px)': {
                    width: '100%'
                },
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    margin: '0'
                },
                '& .MuiInputLabel-root': {
                    color: 'var(--primaryColor)!important',
                    fontSize: '20px',
                },
                '& .MuiInputBase-input': {
                    color: 'var(--primaryColor)!important',
                    fontSize: '20px',
                    padding: '5px 0',
                    height: '32px'
                },
                '& .MuiInputBase-root:before': {borderBottom: '1px solid var(--primaryColor)'},
                '& .MuiInputBase-root:after': {borderBottom: '2px solid var(--primaryColor)'},
                '& .MuiInputLabel-root.Mui-disabled': {color: 'grey!important',},
                '& .MuiButtonBase-root': {
                    color: 'var(--primaryColor)!important',
                    fontSize: '18px',
                    border: '1px solid var(--primaryColor)',
                },
                '& .MuiButtonBase-root.Mui-disabled': {
                    color: 'grey!important',
                    border: '1px solid  grey'

                }

            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                disabled={isDisable}
                id="standard-basic"
                label="Enter your name"
                variant="standard"
                value={name}
                onChange={handleChangeName}
            />
            <MyPhoneInput
                disabled={isDisable}
                number={phoneNumber}
                onChange={onChangePhoneField}
            />
            <TextField
                disabled={isDisable}
                id="standard-multiline-flexible"
                label="Enter your feedback"
                multiline
                maxRows={6}
                value={message}
                onChange={handleChangeMessage}
                variant="standard"
            />
            <Button disabled={isDisable} variant="outlined" onClick={handleSubmit}>Send</Button>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarType}
                       sx={{position: 'absolute', bottom: '80px', width: '280px'}}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Form;
