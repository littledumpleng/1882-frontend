import 'bulma/css/bulma.min.css';
import './App.css';
import {Homepage} from './views/Homepage';
import {Contact} from './views/Contact';


const App = () => {
  return (
    <div className="App">
      <Homepage />
      <Contact />
      {/* <About /> */}
    </div>
  );
}

export default App;
