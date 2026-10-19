import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/common/Header.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/common/MainLayout.jsx'
import Home from './components/pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}  >

          <Route path='/' element={<Home />} />




        </Route>
      </Routes>




    </BrowserRouter>
  


)
