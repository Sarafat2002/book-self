import { createBrowserRouter } from "react-router-dom";
import BookDetails from "../Pages/BookDetails";
import Home from "../Pages/Home";
import Books from "../Pages/Books";
import Readonly from "../Pages/Readonly";
import Mainlayout from "../Layout/Mainlayout";




const router = createBrowserRouter ([
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
        Component: BookDetails ,
        loader: async () => {
          const res = await fetch("/data/booksData.json")
          return res.json()
        }
      }
    ]
  }
]);

export default router;