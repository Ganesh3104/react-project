import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import {NetflixIndex} from './components/netflix/netflix-index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NetflixIndex/>
  </StrictMode>,
)
