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
import LoginPage from './views/LoginPage';
import { AdminDash } from './views/AdminDash';

function HomeApp(props) { // returns the user accessible pages
  return ( // if there is a token, it takes you to any of the pages requested
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
          {/* <Route exact path="/login">
            <LoginPage />
          </Route> */}
          <Route exact path="/login"> {/* I dont really know why this has to be '/login' */}
            <AdminDash />
          </Route>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

const App = () => {
  const [token, setToken] = useState();

  if (!token) { // if there is no token put in, it returns the login page
    return <LoginPage setToken={setToken} />
  }

  return <HomeApp /> // returns user accesible pages and admin dashboard
}

export default App;

// else if (token) {
//   return (
//     <div className="App">
//     <Router>
//       <Route exact path="/login">
//         <AdminDash />
//       </Route>
//     </Router>
//     </div>
//   )
// }