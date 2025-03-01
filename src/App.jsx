import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import About from "./pages/about/about.jsx";  
import Contact from "./pages/contact/contact.jsx";  
import Home from "./pages/home/home.jsx"
import Pricing from "./pages/pricing/pricing.jsx";
import Blog from "./pages/blog/blog.jsx";
import DetailBlog from "./pages/detailBlog/detailBlog.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "detailBlog",
          element: <DetailBlog />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;