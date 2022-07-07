import 'bulma/css/bulma.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './views/public/Homepage';
import { Creator } from './views/admin/Creator';
import { Contact } from './views/public/Contact';
import { Featured } from './views/public/Featured';
import { About } from './views/public/About';
import { Resources } from './views/public/Resources';
// import {Login} from './views/LoginPage';
import Login from './views/LoginPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/creator" element={<Creator />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;