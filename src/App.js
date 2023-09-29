import {BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
              <Route exact path='/'  element={<Home/>} />
              <Route exact path='/Projects'  element={<Projects/>} />
              <Route exact path='/About'  element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;