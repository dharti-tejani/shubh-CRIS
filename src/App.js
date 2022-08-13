import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home_page from './pages/Home_page';
import About_us from './pages/About_us';
import API_catalouges from './pages/API_catalouges';
import Documents from './pages/Documents';
import Error_page from './pages/Error_page';

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home_page />} />
        <Route path="/About_us" element={<About_us />} />
        <Route path="/API_catalouges" element={<API_catalouges />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="*" element={<Error_page />} />
      </Routes>
    </>
  );
}

export default App;
