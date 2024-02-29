import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './navbar.scss'

export default function Navbar() {

  const navigate = useNavigate()

  return (
    <div>
      <div className="navbar">
        <div className="nav__links">
        {/* <Link to="/posts">Posts</Link>
        <Link to="/comments">Comments</Link> */}
        <Link to="/">Home</Link> 
        <Link to="/users">Users</Link>
        <Link to="/calculator">Calculator</Link>
        </div>
        <button
        onClick={() => {
          localStorage.clear();
          navigate("/login")
        }}
        className="nav__btn"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
