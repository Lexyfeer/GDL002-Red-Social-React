import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Navbarprofile from './components/Navbarprofile';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Profile from './components/Profile';
import Wallposts from './components/Wallposts';
import Account from './components/Account';
import Logout from './components/Logout';



function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Navbarprofile />
        {/* <Route exact path="/" component={Login} /> */}
        {/* <Route path="/Signup" component={Signup} /> */}
        <Route exact path="/" component={Profile} />
        <Route path="/Wallposts" component={Wallposts} />
        <Route path="/Account" component={Account} />
        <Route path="/Logout" component={Logout} />
      </div>
    </HashRouter>
  );
}

export default App;
