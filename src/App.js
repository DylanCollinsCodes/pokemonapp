import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Pokemon from './pages/pokemon'
import TeamBuilder from './pages/teambuilder'
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pokemon' element ={<Pokemon/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/teambuilder' element={<TeamBuilder/>}/>
    </Routes>
    </Router>
);
}
  
export default App;