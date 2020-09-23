import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";


export default function App() {
  return (
    <Router>
    <div>
    <Nav />
    
    <Switch>
      <Route path="/project">
      <ProjectPage />
      </Route>
      <Route path="/">
      <Home />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}



