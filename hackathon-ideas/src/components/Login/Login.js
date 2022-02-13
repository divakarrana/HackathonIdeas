import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, Box, Typography, Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../assets/HackLogo.png';
import styled from '@emotion/styled';
import { useHistory } from "react-router-dom";

const theme = createTheme();

const Img = styled.img`
    height: 200px;
`
export default function Login(props) {

    const [error, setError] = React.useState({error: false, helperText: ''});

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let empId = data.get('empId');
        if(props.employeeList.indexOf(empId) !== -1){
            localStorage.setItem("isAuthorized", "true");
            localStorage.setItem("empId", data.get('empId'));
            history.push('/');
        } else {
            setError({error: true, helperText: 'Incorrect Employee Id'});
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Img src={logo} alt='logo' />
                <CssBaseline />
                <Box sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',}}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.dark' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        {...error}
                        required
                        fullWidth
                        id="empId"
                        label="Employee Id"
                        name="empId"
                        autoComplete="empId"
                        autoFocus
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}