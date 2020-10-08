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
import LogoImage from "./components/Logo/Logo.png";

export default function App() {
  return (
    <Router>
      <div class="page">
        <div>
          <img src={LogoImage} style={{ height: "200px" }}></img>
        </div>
        <Nav />
        {/* Add socia media links etc */}
        <div className="pageContent">
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
        </div>

        <h6>Terms & Conditions</h6>
        <footer>Teagen McEwan (c) Copyright 2020</footer>
      </div>
    </Router>
  );
}
