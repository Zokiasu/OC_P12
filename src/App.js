import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Header from './components/Header';
import VerticalNav from './components/VerticalNav';
import axios from 'axios';

const App = () => {
  // const  [data, setData] = React.useState([]);

  // // axios get request to get data from the server
	// useEffect(() => {
	// 	axios.get('http://localhost:3000/user/12').then((res) => console.log(res.data));
	// }, []);


  return (
    <div className='min-h-[724px] max-h-full overflow-hidden'>
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