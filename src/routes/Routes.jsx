import {
     Navigate,
     createBrowserRouter,
   } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../pages/Login/Login";
import LoginLayout from "../layout/LoginLayout";
import Register from "../pages/Register";


   const router = createBrowserRouter([

     {
          path: '/',
          element: <LoginLayout></LoginLayout>,
          children:[
               {
                    path: '/',
                    element: <Navigate to= "/category/0"></Navigate>
               },
               {
                    path: 'login',
                    element: <Login></Login>
               },
               {
                    path: 'register',
                    element: <Register></Register>
               }
          ]
     },
     {
          path: '/category',
          element: <Main></Main>,
          children:[
               {
                    path: ':id',
                    element: <Category></Category>,
                    loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
               }

          ]
     },
     {
          path: '/news',
          element: <NewsLayout></NewsLayout>,
          children:[
               {
                   path: ':id',
                   element: <News></News>,
                   loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
                    
               },

          ]
     }
   ])
   export default router;