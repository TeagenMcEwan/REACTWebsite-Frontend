import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

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
      <div className="Menu">
        {!loggedIn ? (
          // <Link className="Login">Login</Link>
          <Link to="/login">Login</Link>
        ) : (
          <Link onClick={logout}>Logout</Link>
        )}
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/CreateProjectForm">Create Project</Link>
    </nav>
  );
}

// function Nav(props) {
//     const { image }= props;
//     const loggedIn = true;
//     const logout = true;

//     return (
//         <nav>

//         <div>
//         <Link to="/">Home</Link>
//         <Link to="/">About</Link>
//         <Link to="/project">Project</Link>
//         <Link to="/">Contact</Link>

//         {!loggedIn ? (
//             <div>
//                 <Link >Login</Link>
//             </div>
//         ) : (
//           <Link onClick={logout}>Logout</Link>
//         )}

//         <button className="Button">
//             <Link to="/login">Login</Link>
//         </button>
//         </div>

//         </nav>
//     );
// }

export default Nav;
