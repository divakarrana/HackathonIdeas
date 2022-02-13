import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';

function IdeaList(props) {
    let submittedIdeas = props.ideasList;
    let allIdeas = submittedIdeas.map((idea,i) => <IdeaCard handleUpvote={props.handleUpvote} details={idea} key={i}/>);
  return (
    <div>{allIdeas}</div>
  )
}

export default IdeaList