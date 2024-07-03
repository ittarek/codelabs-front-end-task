import { createBrowserRouter } from "react-router-dom";
import MainLayOut from './../LayOut/MainLayOut/MainLayOut';
import ErrorLayOut from "../LayOut/ErrorLayOut/ErrorLayOut";
import App from './../App';

export const router = createBrowserRouter([
  {
    errorElement: <ErrorLayOut></ErrorLayOut>,
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
   
     
    
     
    ],
  },
]);
