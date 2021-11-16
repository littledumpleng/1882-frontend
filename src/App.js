import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter as Router,Route, Switch, Link, Redirect } from 'react-router-dom';
import {Homepage} from './views/Homepage';
import {Contact} from './views/Contact';
import {Featured} from './views/Featured';
import {About} from './views/About';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>s
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
      </div>
      </Router>
      <Footer />
    </div>
  );
}

// const App = () => {
//   // by default take us to user accesible pages
//   // if the admin login button is pressed, take to login page:
//   // if token is input, take to admin dash
//   // if token is missing, take to either homepage or error page
//   // else return homeapp

//   const [token, setToken] = useState();

//   if (!token) { // if there is no token put in, it returns the login page
//     return <LoginPage setToken={setToken} />
//   }

//   return <HomeApp /> // returns user accesible pages and admin dashboard
// }

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