import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";

const Routes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};
const App = () => {


  return (
    <Routes />
  );
};

export default App;
