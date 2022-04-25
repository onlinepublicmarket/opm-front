import React,{useState} from "react";
import { Link } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { getAuth,signOut} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


<div className="pc-header">
<div className="row">
  <div className="col-md-2 col-6 d-flex align-items-center">
    <Link className="navbar-brand" to="/">
      <img alt="logo" src="../LOGO.jpg" /> Online 
    </Link>
  </div>
  <div className="col-md-6 col-8 d-flex align-items-center">
    <form className="input-group">
      <input
        type="search"
        className="form-control rounded search"
        placeholder="Search"
      />
      <button type="submit" className="search-button">
        search
      </button>
    </form>
  </div>
  <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
    <div className="btn-group">
      <button
        type="button"
        className="name-button dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{color:"#8BC34A"}}
      >
        More
      </button>
      <div className="dropdown-menu">
        <Link className="dropdown-item" onClick={logout} icon ={<LogoutOutlined />}>
          Logout
        </Link>
        <Link className="dropdown-item" to="/login">
            Login
          </Link>
        <Link className="dropdown-item" to="/register">
          register
        </Link>
        <Link className="dropdown-item" to="/register">
          Seller Centre
        </Link>

      </div>
    </div>

    <Link to="/cart">
      <i className="fas fa-shopping-cart" ></i>
      <span className="badge">0</span>
    </Link>
  </div>
</div>
</div>