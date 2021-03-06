  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'
import NewComplaints from './components/NewComplaints';
import ExistingComplaints from './components/ExistingComplaints';
import Admin from './components/Admin';

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <NavbarComp/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/NewComplaints" component={NewComplaints} />
        <Route path="/ExistingComplaints" component={ExistingComplaints} />
        <Route path="/Admin" component={Admin} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);