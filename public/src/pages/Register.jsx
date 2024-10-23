import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("form");
    };

    const handleChange = (event) => { }
    
  return (
    <>
    <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className='brand'>
                <img src={Logo} alt='Logo' />
                <h1>snappy</h1>
            </div>
                  <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => handleChange(e)}
                  />
                <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => handleChange(e)}
                  />
                <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      onChange={(e) => handleChange(e)}
                  />
                  <button type="submit">Create User</button>
                  <span>
                      Already have an account? <Link to="/login">Login</Link>
                  </span>
        </form>
    </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
.brand {
display: flex;
align-items: center;
gap: 1rem;
justify-content: center;
img {
height: 5rem;
}
}
`;

export default Register