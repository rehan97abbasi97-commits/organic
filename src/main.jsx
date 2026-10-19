import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/common/Header.jsx'
import MainContext from './context/MainContext.jsx'
import { BrowserRouter } from 'react-router'
import MainLayout from './components/common/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <MainContext>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}  >
      





        </Route>
      </Routes>




    </BrowserRouter>
  </MainContext>


)
