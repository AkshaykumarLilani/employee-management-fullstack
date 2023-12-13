import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditEmployeeModal({ handleClose, open }) {
    const loading = useSelector(store => store.employeeReducer.loading);

    const onEditEmployeeSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Employee
                </Typography>
                <form className='d-flex flex-column gap-3 mt-3' onSubmit={onEditEmployeeSubmit}>
                    <TextField
                        required
                        id="first_name"
                        label="First Name"
                    />
                    <TextField
                        required
                        id="last_name"
                        label="Last Name"
                    />
                    <TextField
                        required
                        id="email"
                        type='email'
                        label="Email"
                    />
                    <FormControl>
                        <InputLabel id="department-label">Department</InputLabel>
                        <Select
                            labelId="department-label"
                            id="department"
                            label="Department"
                            defaultValue={'Tech'}
                        >
                            <MenuItem value={'Tech'}>Tech</MenuItem>
                            <MenuItem value={'Marketing'}>Marketing</MenuItem>
                            <MenuItem value={'Operations'}>Operations</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        id="salary"
                        label="Salary"
                        type='number'
                    />
                    <Button disabled={loading} type='submit' variant="contained" endIcon={<SendIcon />}>
                        Submit
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}
