import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Header from './components/Header';
import VerticalNav from './components/VerticalNav';
import axios from 'axios';

const App = () => {
  return (
    <div className='min-h-[724px] overflow-hidden'>
      <BrowserRouter>
        <Header />
        <div className='flex'>
          <VerticalNav />
          <main className='mt-20'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<Dashboard />} />
              <Route path="*" element={<Error/>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;