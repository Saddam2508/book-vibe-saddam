import { createBrowserRouter } from "react-router";
import MainLayout from "./../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/error/ErrorPage";
import BooksDetailsPage from "../pages/books/BooksDetailsPage";
import ReadBookPage from "../pages/readBookpage/ReadBookPage";

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
        path: "/read-books",
        element: <ReadBookPage />,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        element: <BooksDetailsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
