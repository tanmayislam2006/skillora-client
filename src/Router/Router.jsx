import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import AddService from './../Pages/AddService/AddService';
import ManageService from './../Pages/ManageService/ManageService';
import PrivateRouter from "./PrivateRouter";
import BookedService from './../Pages/BookedService/BookedService';
import ServiceToDo from './../Pages/ServicesToDo/ServiceToDo';

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
            {path:'/addService',
                element:<PrivateRouter><AddService/></PrivateRouter>
            },
            {path:'/manageService',
                element:<PrivateRouter><ManageService/></PrivateRouter>
            },
            {path:'/bookedServices',
                element:<PrivateRouter><BookedService/></PrivateRouter>
            },
            {path:'/serviceToDo',
                element:<PrivateRouter><ServiceToDo/></PrivateRouter>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Login/>
            }
        ]
    }
])
export default router