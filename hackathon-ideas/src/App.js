import './App.css';
import { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
import { initData } from '../src/assets/initData';
import AddNewIdea from './components/AddNewIdea/AddNewIdea';

function App() {

  let { challengeListData, employeeListData, monthsListData } = initData;

  const [ideasList, setIdeasList] = useState([]);
  const [monthsList, setMonthsList] = useState([]);
  const [employeeList, setEmpList] = useState([]);

  localStorage.setItem("monthsList", JSON.stringify(monthsListData));
  localStorage.setItem("empList", JSON.stringify(employeeListData));

  const updateIdeasList = (newIdea) => {
    setIdeasList([...ideasList, newIdea]);
    let savedList = JSON.parse(localStorage.getItem("challengeList"));
    savedList ? savedList.push(...ideasList, newIdea) : savedList = [...ideasList, newIdea];
    localStorage.setItem("challengeList", JSON.stringify(savedList));
  }

  const handleUpvote = (id) => {
    if(!JSON.parse(localStorage.getItem("challengeList"))){
      localStorage.setItem("challengeList", JSON.stringify(ideasList));
    }
    let loggedEmp = localStorage.getItem('empId');
    let updatedIdeasList = ideasList.map((idea) => {
      if(idea.id === id){
        if(idea.votedBy.indexOf(loggedEmp) === -1){
          return {...idea, votes:idea.votes+1, votedBy: [...idea.votedBy, loggedEmp]};
        } else {
          return idea;
        }
      } else {
        return idea;
      }
    });
    setIdeasList(updatedIdeasList);
    localStorage.setItem("challengeList", JSON.stringify(updatedIdeasList));
  }

  const sortChallenges = (e) => {
    if(e.target.name === "votes"){
      ideasList.sort((a, b) => b.votes - a.votes);
      setIdeasList([...ideasList]);
    } else {
      ideasList.sort((a,b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());
      setIdeasList([...ideasList]);
    }
  }
  useEffect(() => {
      let storedIdeas = JSON.parse(localStorage.getItem("challengeList"));
      storedIdeas ? setIdeasList([...ideasList, ...storedIdeas]) : setIdeasList([...ideasList, ...challengeListData]);
      setMonthsList(monthsListData);
      setEmpList(employeeListData);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/login"><Login employeeList={employeeList}/></Route>
        {ideasList.length ? (<Route path="/" exact><ProtectRoute><Dashboard sortChallenges={(e) => sortChallenges(e)} handleUpvote={(id) => handleUpvote(id)} ideasList={ideasList}/></ProtectRoute></Route>) : null }
        <Route path ="/add"><ProtectRoute><AddNewIdea monthsList={monthsList} idGen={ideasList.length+1} updateIdeasList={(newIdea) => updateIdeasList(newIdea)}/></ProtectRoute></Route>
        <Route path="*" render={() => <h1>Route not defined</h1>}></Route>
      </Switch>
    </div>
  );
}

export default App;
