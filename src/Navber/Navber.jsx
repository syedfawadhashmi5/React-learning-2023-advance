import React from 'react'
import { Link } from "react-router-dom";

function Navber() {
  return (
<nav className="navbar navbar-expand-lg  bg-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">
      React Learning
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white text-center">
        <li className="nav-item">
          <Link to="/Home" className="nav-link">
          Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/fetchApi" className="nav-link">
          fetchApi
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/axiosAPi" className="nav-link">
          axiosAPi
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ContextApiObject" className="nav-link">
          ContextApiObject
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ContextApiarray" className="nav-link">
          ContextApiarray
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ContextApiNumber" className="nav-link">
          ContextApiNumber
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navber