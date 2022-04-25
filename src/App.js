import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store'

import Layout from './hocs/Layout'

import Home from './containers/Home';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import Login from './containers/Login';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/activate/:uid/:token' element={<Activate />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/reset-password' element={<ResetPassword />} />
              <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    )
  }
}

export default App