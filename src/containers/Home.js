import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () =>(
      <div className='container'>
        <div className='jumbotron mt-5'>
          <h1 className='display-4'>Welcome to Therapy App!</h1>
          <p className='page-description'>This is an application to manage your team of therapist and patients!</p>
          <hr className='my-4' />
          <p> If you are not just a visitor, click the login button</p>
          <Link className='btn btn-primary' to='/login' role='button'>Login</Link>
        </div>
      </div>
  )

export default Home;