import  ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AddInfoPage from "./components/AddInfoPage/AddInfoPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import EditInfoPage from "./components/EditInfoPage/EditInfoPage";

const AppLayout=()=>{
    return(
        <div>
            <Outlet/>
        </div>
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<LandingPage/>
            },
            {
                path:"/add",
                element:<AddInfoPage/>
            },
            {
                path:"/details/:id",
                element:<DetailsPage/>
            },
            {
                path:"/details/edit/:id",
                element:<EditInfoPage/>
            },
        ],
        errorElement:<ErrorPage/>
    }
])



const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter}/>);