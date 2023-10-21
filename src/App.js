import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import { client } from "./store/http";
import { QueryClientProvider } from "@tanstack/react-query";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "blog", element: <Blogs /> },
      { path: "contact", element: <Contact /> },
      { path: "work", element: <Projects /> },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
