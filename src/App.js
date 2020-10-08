import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import CreateProject from "./components/CreateProjectForm/CreateProjectForm";
// import EditProject from "./components/EditProjectForm/EditProjectForm";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import EditProject from "./pages/EditProject";

export default function App() {
  return (
    <Router>
      <div>
        <img
          src="Logo.png"
          // alt="waSportsStars Logo"
          style={{ width: "250px", height: "200px" }}
        ></img>
        <Nav />
        {/* Add socia media links etc */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/editproject/:id">
            <EditProject />
          </Route>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/CreateProjectForm">
            <CreateProject />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>

        <h6>Terms & Conditions</h6>
        <footer>Teagen McEwan (c) Copyright 2020</footer>
      </div>
    </Router>
  );
}
