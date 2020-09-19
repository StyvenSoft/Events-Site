import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import EventsList from './components/EventsList';
import CreateEvent from './components/CreateEvent';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <div className="container p-4">
        <Route path="/" exact component={EventsList} />
        <Route path="/edit/:id" component={CreateEvent} />
        <Route path="/create" component={CreateEvent} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
