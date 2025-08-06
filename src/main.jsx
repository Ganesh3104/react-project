import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
 import {NetflixIndex} from './components/netflix/netflix-index.jsx'
import { DataBinding } from './components/data-binding/data-binding.jsx'
import { DataApi } from './components/data-binding/api.jsx'
import { DataFetch } from './components/data-binding/fetch.jsx'
import { DataAxios } from './components/data-binding/axios.jsx'
import { EventBinding } from './components/event-Binding/event-binding.jsx'
import { EventBindingSearch } from './components/event-Binding/event-binding-search.jsx'

createRoot(document.getElementById('root')).render(
  
    
    < EventBindingSearch />

)
