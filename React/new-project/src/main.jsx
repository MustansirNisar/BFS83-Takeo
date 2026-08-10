import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './ReduxLegacy/Store.jsx'
import storee from './ReduxToolkit/Storee.jsx'

createRoot(document.getElementById('root')).render(
 <Provider store={storee}>
  <App /> 
 </Provider>

    
)
