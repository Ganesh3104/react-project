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
import { EventonChange } from './components/event-Binding/onchange.jsx'
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx'
import { MouseAnimation } from './components/mouse-demo/mouse-animation.jsx'
import { KeyDemo } from './components/keyboard-element-demo/keyboard-demo.jsx'
import { EMICalculator } from './components/keyboard-element-demo/emi-calculator.jsx'
import { ButtonDemo } from './components/keyboard-element-demo/button-demo.jsx'
import { ThrottleDemo } from './components/time-demo/throttle.jsx'
import { StopWatch } from './components/time-demo/stop-watch.jsx'
import { FakeStoreDemo } from './components/api-demo/fakestore.jsx'

createRoot(document.getElementById('root')).render(
  
    
    < FakeStoreDemo />

)
