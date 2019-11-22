import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import MentorDetail from "./components/MentorDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/mentors/:publicId" component={MentorDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
