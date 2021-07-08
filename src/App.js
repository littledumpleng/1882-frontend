import 'bulma/css/bulma.min.css';
import './App.css';
import {Homepage} from './views/Homepage';
import {Contact} from './views/Contact';
import {Featured} from './views/Featured';
import { FooterContainer } from './containers/footer'


const App = () => {
  return (
    <div className="App">
      <Homepage />
      <Contact />
      <Featured />
      <FooterContainer />
      {/* <About /> */}
    </div>
  );
}

export default App;
