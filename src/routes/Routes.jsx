import { createBrowserRouter } from "react-router";
import MainLayout from "./../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/error/ErrorPage";
import BooksDetailsPage from "../pages/books/BooksDetailsPage";
import ReadBookPage from "../pages/readBookpage/ReadBookPage";
import Chart from "../components/charts/Chart";

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
        path: "/pages-to-read",
        element: <Chart />,
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
