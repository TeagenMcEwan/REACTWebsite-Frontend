import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    token != null ? setLoggedIn(true) : setLoggedIn(false);
  }, [location]);

  const logout = () => {
    window.localStorage.clear();
    history.push("/login");
  };

  const { image } = props;
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/CreateProjectForm">Create Project</Link>
      {!loggedIn ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link onClick={logout}>Logout</Link>
      )}
    </nav>
  );
}

export default Nav;
