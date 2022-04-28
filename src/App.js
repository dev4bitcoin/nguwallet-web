import { Fragment } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import NavBar from './screens/navbar';
import './App.css';
import Footer from './screens/footer';
import Privacy from './screens/privacy';
import About from './screens/about';
import Demo from './screens/demo';
import Support from './screens/support';
import Home from './screens/home';

function App() {
  return (
    <Fragment>
      <div className='app-container'>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/support" element={<Support />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className='footer-area'>
          <Footer />
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
