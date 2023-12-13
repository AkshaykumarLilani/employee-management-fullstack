import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { loginAction } from '../Redux/AuthReducer/actions';

function LoginPage() {
    const dispatch = useDispatch();
    const loading = useSelector(store => store.employeeAuthReducer.loading);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target[0].value,
            password: e.target[1].value,
        }
        console.log(data, e);
        dispatch(loginAction(data))
    }

    return (
        <>
            <main className='d-flex justify-content-center align-items-center' id='signup-page' style={{ height: "100svh" }}>

                <section>
                    <h4 className='text-center'> Login </h4>

                    <form className='d-flex flex-column gap-3' onSubmit={onFormSubmit}>
                        <TextField
                            // error
                            id="signup-email"
                            label="Email"
                            type='email'
                            // helperText="Incorrect entry."
                            variant="filled"
                            required
                        />
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" className='m-0'>
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button disabled={loading} type='submit' variant="contained" endIcon={<SendIcon />}>
                            Submit
                        </Button>
                    </form>
                    <div className='mt-2'>
                        Not registered?
                        <Link to={'/signup'} className='ms-1'>Signup</Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default LoginPage