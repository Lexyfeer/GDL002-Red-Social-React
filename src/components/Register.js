import React from "react";
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Logo from "../assets/images/logo.png";
import Button from "./Button";
// import Button from "react-bootstrap/Button";

class Register extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="contentSignUp">
          <header>
            <img className="header-logo-image" src={Logo} alt="logo" />
            <h2>Registrate</h2>
          </header>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder="Nickname" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo" />
              <Form.Text className="text-muted">
                Nunca compartas datos personales con extraños.
              </Form.Text>
              <Form.Label>Confirma tu correo</Form.Label>
              <Form.Control type="email" placeholder="Confirmar correo" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
              <Form.Label>Confirma tu contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirma tu contraseña" />
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
          <Link to="./">¿Ya eres usuario registrado? VE A INICIAR SESIÓN</Link>
        </div>
      </div>
    );
  }
}

export default Register;
