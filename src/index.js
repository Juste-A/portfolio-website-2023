import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import './fonts/Playfair-display/PlayfairDisplay-Bold.ttf'
import './fonts/Playfair-display/PlayfairDisplay-Regular.ttf'
import './fonts/Poppins/Poppins-Light.ttf'
import './fonts/Poppins/Poppins-Medium.ttf'
import './fonts/Poppins/Poppins-Regular.ttf'
import './fonts/Poppins/Poppins-Bold.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
