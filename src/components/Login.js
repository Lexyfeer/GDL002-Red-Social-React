import React from "react";
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Logo from "../assets/images/logo.png";
import Button from "./Button";
// import Button from "react-bootstrap/Button";

class Login extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="contentLogIn">
          <header>
            <img className="header-logo-image" src={Logo} alt="logo" />
            <h2>Iniciar Sesión</h2>
          </header>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" />
              <Form.Text className="text-muted">
              Nunca compartas datos personales con extraños.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button
            //   type="submit"
            //   hash="#./Navbarprofile"
              className="btnEnter btn btn-dark btn-lg"
              content="Entrar"
            />
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
          <Link to="./Register">¿Aún no tienes cuenta? REGÍSTRATE AQUÍ</Link>
        </div>
      </div>
    );
  }
}

export default Login;
