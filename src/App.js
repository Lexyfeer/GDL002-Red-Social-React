import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import HomeWallposts from './components/Homewallposts';
import Profile from './components/Profile'
import Account from './components/Account';
// import Logout from './components/Logout';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Homewallposts" component={HomeWallposts} />
        <Route exact path="/Profile" component={Profile} />
        <Route path="/Account" component={Account} />
        {/* <Route path="/Logout" component={Logout} /> */}
      </div>
    </HashRouter>
  );
}

export default App;
