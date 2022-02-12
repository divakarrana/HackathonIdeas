import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';

export default function ButtonAppBar() {
    let userName = localStorage.getItem('empId');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
        <Avatar src="/broken-image.jpg"/>&nbsp;&nbsp;&nbsp;<h3>{userName}</h3>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 0}}>
            Hackathon Ideas
          </Typography>
          <Button variant="outlined" color="inherit">Submit New Ideas!</Button>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
