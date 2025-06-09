import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {path:'/',
                element:<Home/>
            },
            {path:'/services',
                element:<Services/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])
export default router