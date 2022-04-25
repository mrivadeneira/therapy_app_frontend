import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;

  const { uid, token} = useParams();

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to='/' />
  }

  return (
    <div className='container mt-5'>
      <h1> Sign In</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            placeholder='New password'
            name='new_password'
            defaultValue={new_password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            placeholder='Confirm new password'
            name='re_new_password'
            defaultValue={re_new_password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <button
          className='btn btn-primary'
          type='submit'
        >
          Reset Password
        </button>
      </form>

    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);