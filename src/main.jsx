import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import BookProvider from './ContextApi/BookProvider'
import router from "./Routes/router";
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
        <ToastContainer/>
    </BookProvider>
  </StrictMode>,
)
