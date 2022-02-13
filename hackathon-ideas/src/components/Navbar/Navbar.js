import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {

    const history = useHistory();
    let userName = localStorage.getItem('empId');

    function handleSubmitIdea() {
        history.push('/add');
    }

    function handleLogout() {
        localStorage.setItem("isAuthorized", "false");
        history.push('/login');
    }

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Avatar src="/broken-image.jpg"/>&nbsp;&nbsp;&nbsp;<h3>{userName}</h3>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hackathon Ideas
                        </Typography>
                        <Button variant="outlined" color="inherit" onClick={handleSubmitIdea}>Submit Idea</Button>&nbsp;&nbsp;
                        <Button variant="outlined" color="inherit" onClick={handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    );
}
