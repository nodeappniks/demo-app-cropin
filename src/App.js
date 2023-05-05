import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Registration';
import Home from './Components/Home/Home';
import App1 from './Components/App1/App1';
import App2 from './Components/App2/App2';


function App() {

  const router = createBrowserRouter([
    {
      path: "home",
      element: <Home />
    },
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "app1",
      element: <App1 />,
    },
    {
      path: "app2",
      element: <App2 />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);



  return (
    <RouterProvider router={router} />
  );
}

export default App;
