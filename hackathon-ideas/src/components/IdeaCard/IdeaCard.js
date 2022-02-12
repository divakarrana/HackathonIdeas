import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

export default function IdeaCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {props.details.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.details.month}
        </Typography>
        <Typography variant="body2">
          {props.details.des}
          <br />
          Tags: {props.details.tag}
        </Typography>
        <Typography variant="body2">
          Votes: {props.details.votes}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
            <Button variant='contained'>Upvote &nbsp; <ThumbUpOutlinedIcon/></Button>
      </CardActions>
    </Card>
  );
}
