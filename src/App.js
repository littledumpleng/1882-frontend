import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Homepage} from './views/Homepage';
import {Contact} from './views/Contact';
import {Featured} from './views/Featured';
import {About} from './views/About';
import {Resources} from './views/Resources';
// import {Login} from './views/LoginPage';
import Login from './views/LoginPage';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/home" element={<Homepage />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/featured" element={<Featured />}/>
          <Route path="/resources" element={<Resources />}/>
          <Route path="/login" element={<Login />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;