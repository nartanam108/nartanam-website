import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import SiddhendraAradhana from './pages/SiddhendraAradhana';
import Contact from './pages/Contact';
import Arangetrams from './pages/Arangetrams';
import Rangaanubhavam2023 from './pages/Rangaanubhavam';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/siddhendra-aradhana" element={<SiddhendraAradhana />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/arangetrams" element={<Arangetrams />} />
        <Route path="/arangetrams/:id" element={<Arangetrams />} />
        <Route path="/rangaanubhavam-2023" element={<Rangaanubhavam2023 />} />
      </Routes>
    </Router>
  );
};

export default App;
