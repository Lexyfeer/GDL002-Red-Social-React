import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
// import menuIco from '../assets/images/icon-menu-48.png';

const Navbarprofile = () => (
    <nav className="navbar">
        <Link className="App-logo navbar-brand" to="/">
            <img className="App-logo-image" src={Logo} alt="logo" />
        </Link>
        <div className="navMenu navbar-nav">
            <NavLink className="nav-item navMenuLink" to="/" >Muro</NavLink>
            <NavLink className="nav-item navMenuLink" exact to="/Profile" >Perfil</NavLink>
            <NavLink className="nav-item navMenuLink" to="/Account" >Cuenta</NavLink>
            <NavLink className="nav-item navMenuLink" to="/Logout" >Cerrar sesion</NavLink>
        </div>

    </nav>
);

export default Navbarprofile;