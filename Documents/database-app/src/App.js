import 'bulma/css/bulma.min.css';
import './App.css';
// import {HashRouter as Router,Route,Switch,Link,useHistory,Redirect} from 'react-router-dom';
import { BrowserRouter as Router,Route, Switch, Link, Redirect } from 'react-router-dom';

import {Homepage} from './views/Homepage';
import {Contact} from './views/Contact';
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
      </div>
      </Router>
      {/* <Homepage />
      <Contact /> */}
      {/* <About /> */} 
    </div>
  );
}

export default App;
