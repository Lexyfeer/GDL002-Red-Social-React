import React, { Component } from 'react';
import firebase from './firebase/firebase';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import HomeWallposts from './components/Homewallposts';
import Profile from './components/Profile'
import Account from './components/Account';

class App extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = {
      logged: {},
    };
    //this.listener = this.listener.bind(this);
  }
  componentDidMount() {
    this.listener();
  }
  
  listener = () => {
    firebase.auth().onAuthStateChanged((logged) => {
      logged ? this.setState({ logged: true }) : this.setState({ logged: false });
    });
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => this.state.logged ? (<HomeWallposts logged={this.state.logged} />) : (<Login />)} />
            <Route path="/Homewallposts" render={() => this.state.logged ? (<HomeWallposts logged={this.state.logged} />) : (<Register />)} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Account" component={Account} />
          </Switch>
        </div>
      </HashRouter>
    );
  }

}

export default App;
