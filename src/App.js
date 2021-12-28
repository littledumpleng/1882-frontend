import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Navigate } from 'react-router-dom';
import {Homepage} from './views/Homepage';
import {Contact} from './views/Contact';
import {Featured} from './views/Featured';
import {About} from './views/About';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import { Route } from 'react-router';

// fix it to comply with v6
// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
        <Routes>
          <Route exact path="/">
            <Navigate to="/home" />
          </Route>
          </Routes>
          <Routes>
          <Route exact path="/home">
            <Homepage />
          </Route>
          </Routes>
          <Routes>
          <Route exact path="/contact">
            <Contact />
          </Route>
          </Routes>
          <Routes>
          <Route exact path="/about">
            <About />
          </Route>
          </Routes>
          <Routes>
          <Route exact path="/featured">
            <Featured />
          </Route>
          </Routes>
      </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;