import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

export default function IdeaCard(props) {

    return (
        <Card sx={{ minWidth: 275, margin: 2, backgroundColor: "lightblue"}} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.details.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.details.month}
                </Typography>
                <Typography variant="body3">
                    {props.details.des}
                </Typography>
                <br /><br />
                <Typography variant="body2">
                    <b>Tags:</b> #{props.details.tag}
                </Typography>
                <Typography variant="body2">
                    <b>Votes:</b> {props.details.votes}
                </Typography>
                <Typography variant="body2">
                    <b>Created By:</b> {props.details.createdBy}
                </Typography>
                <Typography variant="body2">
                    <b>Created Date:</b> {props.details.createdDate}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant='contained' onClick={() => props.handleUpvote(props.details.id)}>Upvote &nbsp; <ThumbUpOutlinedIcon/></Button>
            </CardActions>
        </Card>
    );
}
