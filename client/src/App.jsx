import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#3c3c3c] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#ffa500] text-black px-4 py-2 rounded-md">Create</Link>

    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#3c3c3c] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
    
    <div className=" mt-auto py-0.5 flex justify-center items-center bg-[#3c3c3c] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <h1 className="text-[#ffa500] font-poppins font-semibold">
      </h1>
    </div>
    <div className=" mt-auto py-2 flex justify-center items-center bg-[#3c3c3c] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <h1 className="text-[#ffa500] font-poppins font-semibold">
       ImageiA ©2023 - All Copyright Reserved 
      </h1>
      
    </div>
  </BrowserRouter>
  
);

export default App;
