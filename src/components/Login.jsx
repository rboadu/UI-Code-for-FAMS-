import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from "react-google-button";
import './Login.css';



function Login(){
    return(
      <>
      <div className="LoginContainer">
        <div className="WelcomeContainer">
          <h1 className="line-1 anim-typewriter">Welcome back</h1>
        </div>
        <div className="LoginFormContainer">
          <div className="FormContainer">
            <Form className="login-form">
                <h1 className="LoginText"> Login</h1>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mb-3">
                      Log in
                  </Button>
                  <GoogleButton className="google-button" label="Sign in with Google" />
              </Form>
            </div>
          </div>
      </div>
      </>

    );
}

export default Login; 