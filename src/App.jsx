import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/about"
import Landing from "./pages/landing"
import ContactUs from "./pages/contact"
import AppLayout from "./components/appLayout"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/about-us", element: <About /> }
    ]
  }

])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App