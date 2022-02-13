import React from 'react';
import Navbar from '../Navbar/Navbar';
import IdeaList from '../IdeaList/IdeaList';
import logo from '../../assets/HackLogo.png';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';

function Dashboard(props) {

    const Img = styled.img`
    height: 150px;
    margin: 10px;
`
    const Div = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
  return (
    <React.Fragment>
        <Navbar/>
        <Div>
            <div>
            <Img src={logo} alt='logo' />
            </div>
            <Button variant="outlined" color="inherit" onClick={props.sortChallenges} name="votes">Sort by Votes &nbsp; <FavoriteBorderIcon/></Button><br/>
            <Button variant="outlined" color="inherit" onClick={props.sortChallenges} name="dates">Sort by Dates &nbsp; <InsertInvitationRoundedIcon/></Button>
        </Div>
        <IdeaList handleUpvote={props.handleUpvote} ideasList={props.ideasList}/>
    </React.Fragment>
  )
}

export default Dashboard;