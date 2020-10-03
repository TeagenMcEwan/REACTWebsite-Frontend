import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
