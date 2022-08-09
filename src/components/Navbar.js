import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  let history = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    history("/login");
  }
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <Link className="font-weight-bold bg-dark text-white" to="/">
        CloudBook
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link
              className={`nav-link text-white ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link text-white ${
                location.pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
        {!localStorage.getItem('token')? <form className="form-inline my-2 my-lg-0">
          <Link className="btn btn-success mx-1" role="button" to="/login">
            Login
          </Link>
          <Link className="btn btn-success mx-1" role="button" to="/signup">
            SignUp
          </Link>
        </form> : <button onClick={handleLogout} className="btn btn-primary">Log Out</button>}
      </div>
    </nav>
  );
}

export default Navbar;
