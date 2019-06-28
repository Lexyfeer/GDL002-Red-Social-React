import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

import firebase from '../firebase/firebase';

const Navbarprofile = () => (
    <nav className="navbar">
        <Link className="App-logo navbar-brand" to="/">
            <img className="App-logo-image" src={Logo} alt="logo" />
        </Link>
        <div className="navMenu navbar-nav">
            <NavLink className="nav-item navMenuLink" exact to="/" >Muro</NavLink>
            <NavLink className="nav-item navMenuLink" to="/Profile" >Perfil</NavLink>
            <NavLink className="nav-item navMenuLink" to="/Account" >Cuenta</NavLink>

            <Link className="nav-item navMenuLink" 
                to="/" 
                onClick={() => firebase.auth().signOut()} >Cerrar</Link>


        </div>

    </nav>
);

export default Navbarprofile;