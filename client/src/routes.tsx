import { createBrowserRouter } from "react-router-dom"
import CheckoutPage from "./pages/CheckoutPage"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
import ProductDetailPage from "./pages/ProductDetailPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
])

export default router
