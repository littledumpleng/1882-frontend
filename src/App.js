import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter as Router,Route, Switch, Link, Redirect } from 'react-router-dom';
import {Homepage} from './views/Homepage';
import {Contact} from './views/Contact';
import {Featured} from './views/Featured';
import {About} from './views/About';
import {Header} from './components/Header';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Route exact path="/home">
            <Homepage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/featured">
            <Featured />
          </Route>
      </div>
      </Router>
    </div>
  );
}

export default App;