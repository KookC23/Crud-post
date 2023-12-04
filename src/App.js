import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from './components/Formulario';
import FormularioUno from './components/FormularioUno';
import FormularioDos from './components/FormularioDos';
import FormularioTres from './components/FormularioTres';
import FormularioCuatro from './components/FormularioCuatro';
import FormularioCinco from './components/FormularioCinco';
import FormulariooSeis from './components/FormulariooSeis';
import './App.css';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Formulario" element={<Formulario/>} />
        <Route path="/FormularioUno" element={<FormularioUno/>} />
        <Route path="/FormularioDos" element={<FormularioDos/>} />
        <Route path="/FormularioTres" element={<FormularioTres/>} />
        <Route path="/FormularioCuatro" element={<FormularioCuatro/>} />
        <Route path="/FormularioCinco" element={<FormularioCinco/>} />
        <Route path="/FormulariooSeis" element={<FormulariooSeis/>} />
      </Routes>
    </Router>
  );
}

export default App;