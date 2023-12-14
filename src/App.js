import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SingUp';
import Vacaciones from './components/pages/Vacaciones';
import Descubrir from './components/pages/Descubrir';
import Destinos from './components/pages/Destinos';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Vacaciones' element={<Vacaciones />} />
          <Route path='/Descubrir' element={<Descubrir />} />
          <Route path='/Destinos' element={<Destinos />} />
          <Route path='/sign-up' element={<SignUp />} />

      </Routes>
    </Router>
  );
}

export default App;