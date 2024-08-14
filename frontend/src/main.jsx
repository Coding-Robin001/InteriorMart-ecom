import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"


import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          draggable
          pauseOnHover
          theme="dark"
        />
         <App />
         </Provider>
    </BrowserRouter>
  </StrictMode>,
)



    