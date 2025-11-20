import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import { BrowserRouter } from 'react-router-dom';
import { ServicesProvider } from './context/ServicesContext.jsx';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ServicesProvider>
    <App />
  </ServicesProvider>
  </BrowserRouter>,
)
