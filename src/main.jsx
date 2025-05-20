import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './index.css'
import App from './App.jsx'
import { defineCustomElements } from '@infineon/infineon-design-system-react';
//...

defineCustomElements(window)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
