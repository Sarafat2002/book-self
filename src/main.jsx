import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Mainlayout from './Layout/Mainlayout'
import Home from './Pages/Home'
import Books from './Pages/Books'
import Readonly from './Pages/Readonly'
import BookDetails from './Pages/BookDetails'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/books",
        Component: Books
      },
      {
        path: "/readonly",
        Component: Readonly
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: async () => {
          const res = await fetch("/data/booksData.json")
          return res.json()
        }
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
