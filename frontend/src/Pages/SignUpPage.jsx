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
import { notify } from "../Utilities/displayGlobalMessage";
import { signupAction } from '../Redux/AuthReducer/actions';

function SignUpPage() {
    const dispatch = useDispatch();

    const loading = useSelector(store => store.employeeAuthReducer.loading);

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target[0].value,
            password: e.target[1].value,
            confirmPassword: e.target[3].value
        }

        if (!data.email || !data.password || !data.confirmPassword){
            notify("Please fill all the fields", "error");
            return;
        }

        if (data.password !== data.confirmPassword) {
            notify("Password and Confirm password does not match", "error");
            return;
        }

        // console.log(data, e);
        dispatch(signupAction(data));
    }

    return (
        <>
            <main className='d-flex justify-content-center align-items-center' id='signup-page' style={{ height: "100svh" }}>

                <section>
                    <h4 className='text-center'> Signup </h4>

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
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" className='m-0'>
                            <InputLabel htmlFor="filled-adornment-confirm password">confirm password</InputLabel>
                            <FilledInput
                                id="filled-adornment-confirm password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
                        Already registered?
                        <Link to={'/login'} className='ms-1'>Login</Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SignUpPage