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
import Login from './views/LoginPage';
import { AdminDash } from './views/AdminDash';

const App = () => {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

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
          <Switch>
            <Route exact path="/admindash">
              <AdminDash />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;