import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import About from "../components/About";
import Career from "../components/Career";
import NewsDetails from "../components/NewsDetails";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:() => fetch('/news.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/career',
          element:<Career></Career>
        },
        {
          path:'/news/:id',
          element:<PrivateRoute>
              <NewsDetails></NewsDetails>
          </PrivateRoute>
        },
      ]
    }
  ])

export default router;