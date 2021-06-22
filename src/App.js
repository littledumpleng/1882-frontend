import 'bulma/css/bulma.min.css';
import './App.css';
import {Homepage} from './views/Homepage';
import {Contact} from './views/Contact';
import {Featured} from './views/Featured';


const App = () => {
  return (
    <div className="App">
      <Homepage />
      <Contact />
      <Featured />
      <About /> 
    </div>
  );
}

export default App;
