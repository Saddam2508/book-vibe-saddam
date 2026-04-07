import { createBrowserRouter } from "react-router";
import MainLayout from "./../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import BooksPage from "../pages/books/BooksDetailsPage";
import ErrorPage from "../pages/error/ErrorPage";
import BooksDetailsPage from "../pages/books/BooksDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/bookDetails/:id",
        loader: ()=>fetch("/booksData.json"),
        element: <BooksDetailsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
