import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import MyProvider from './context api/MyProvider.jsx'
import router from './router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider >
    <RouterProvider router={router} />
    </MyProvider>
  </React.StrictMode>,
)
