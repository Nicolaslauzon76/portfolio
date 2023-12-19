import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "*",
          element: <Navigate to="/" replace/>,
        },
      ],
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};
const App = () => {
  return <Routes />;
};

export default App;
