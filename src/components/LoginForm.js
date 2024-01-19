import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './LoginForm.css'; // Import the custom CSS for animations
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  // Initialize useNavigate
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Your login logic here
     
      navigate('/MainScreen')
    }

    setValidated(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidated(false); // Reset validation on input change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidated(false); // Reset validation on input change
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
                className="animated-input"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="animated-input"
                minLength="6"
              />
              <Form.Control.Feedback type="invalid">
                Password must be at least 6 characters.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="animated-button mt-2">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
