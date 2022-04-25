import React, { Component, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password)
  };

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <div className='container mt-5'>
      <h1> Sign In</h1>
      <p> Sign into your Account</p>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            placeholder='Email'
            name='email'
            defaultValue={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            className='form-control'
            type='password'
            placeholder='password'
            name='password'
            defaultValue={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <button
          className='btn btn-primary'
          type='submit'
        >
          Login
        </button>
      </form>
      <p className='mt-3'>
        Doesn't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
      <p className='mt-3'>
        Forgot your password? <Link to='/reset-password'> Reset Password</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);