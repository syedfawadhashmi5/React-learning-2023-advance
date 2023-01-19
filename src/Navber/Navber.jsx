import React from "react";
import { Link } from "react-router-dom";

function Navber() {
  return (
    <nav className="navbar navbar-expand-lg bg-info text-white">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Navbar scroll
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav text-white me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <Link  className="nav-link active" aria-current="page" to="/" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link active" to="/addcart">Shop</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navber;
