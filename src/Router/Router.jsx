import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home";
import Media from "../Pages/Media/Media";
import SignUp from "../Pages/Shared/SignUp";
import LogIn from "../Pages/Shared/LogIn";
import Details from "../Pages/Details";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },{
        path: '/media',
        element: <Media/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
      {
        path: '/login',
        element: <LogIn/>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => 
        fetch(`http://localhost:5000/posts/${params.id}`)
      }
    ]
  }
])