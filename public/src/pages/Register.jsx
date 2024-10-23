import React from 'react';
import styled from "styled-components";

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
                <img src="" alt='' />
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
                      Already have an account? <link to="/login">Login</link>
                  </span>
        </form>
    </FormContainer>
    </>
  )
}

const FormContainer = styled.div``;

export default Register