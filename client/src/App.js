import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

//import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import User from './components/userComponents/User';
import Notes from './components/noteComponents/Notes';
import Login from './components/loginComponents/Login';


class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/> 
        <div className="Test">   
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/notes" component={Notes}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </div>

      </div>

    );
  }
}

export default App;
