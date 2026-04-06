import { createBrowserRouter } from "react-router";
import MainLayout from "./../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import BooksPage from "../pages/books/BooksPage";
import ErrorPage from "../pages/error/ErrorPage";

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
    ],
    errorElement: <ErrorPage />,
  },
]);
