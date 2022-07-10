import { BrowserRouter, Routes,Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
 
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home />} /> 
     <Route path='/about' element={<About />} /> 
     {/* si l'url ne correspond a rien ramener Home */}
     <Route path='*' element= {<Home />} />
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
