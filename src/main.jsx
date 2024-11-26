import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import StatisticsPage from './components/StatisticsPage/StatisticsPage.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Blogs from './components/Blogs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path:'/statistics',
        element: <StatisticsPage></StatisticsPage>
      },
      {
        path: 'products/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('/gadgets.json')
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
