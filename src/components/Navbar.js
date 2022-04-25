import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <Fragment>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      </ul>
    </Fragment>
  )

  const authLinks = () => (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item mx-2">
        <a className="nav-link" href="#!" onClick={logout}>Logout</a>
      </li>
    </ul>
  )

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
      <div className="container-xl">
        <a className="navbar-brand" href="#">Container XL</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu" aria-labelledby="dropdown07XL">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form>
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
          </form>
          {isAuthenticated ? authLinks() : guestLinks()}
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar);