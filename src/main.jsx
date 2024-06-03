import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import MyProvider from './context api/MyProvider.jsx'
import router from './router/Router.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider >
    <Provider store={store}>
    <Toaster/>
    <RouterProvider router={router} />
    </Provider>
    </MyProvider>
  </React.StrictMode>,
)
