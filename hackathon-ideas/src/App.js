import './App.css';
import { useEffect } from 'react';
import Login from './components/Login/Login';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';
import { initData } from '../src/assets/initData';

function App() {

  useEffect(() => {
    let { challengeList, isAuthorized, employeeList } = initData;
    localStorage.setItem("challengeList", JSON.stringify(challengeList));
    localStorage.setItem("isAuthorized", JSON.stringify(isAuthorized));
    localStorage.setItem("empList", JSON.stringify(employeeList));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/login"><Login/></Route>
        <Route path="/" exact><ProtectRoute><Dashboard/></ProtectRoute></Route>
      </Switch>
    </div>
  );
}

export default App;
