import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';

function IdeaList() {
    let submittedIdeas = JSON.parse(localStorage.getItem("challengeList"));
    let allIdeas = submittedIdeas.map((idea) => <IdeaCard details={idea} key={idea.id}/>);
  return (
    <div>{allIdeas}</div>
  )
}

export default IdeaList