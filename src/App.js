import 'bulma/css/bulma.min.css';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Homepage } from './views/Homepage';
import { Contact } from './views/Contact';
import { Featured } from './views/Featured';
import { About } from './views/About';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Login } from './views/Login';
import { AdminDash } from './views/AdminDash';

const App = () => {
  const [token, setToken] = useState();

  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/featured">
            <Featured />
          </Route>
          <Route exact path="/login">
            {/* took out the stuff with if from tutorial */}
              <Login setToken={setToken} />
            
          </Route>
          <Route exact path="/admindash">
            <AdminDash />
          </Route>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;