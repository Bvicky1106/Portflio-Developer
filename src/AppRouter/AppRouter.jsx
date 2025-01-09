import React from 'react'


import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Main from '../core/Main';



function AppRouter() {
  return(
    <BrowserRouter>
    <Routes>
        <Route element={<Main/>}>
        <Route path="/" element={<Home/>}/>
        </Route>
    </Routes>
    
    </BrowserRouter >
  ) 
}

export default AppRouter