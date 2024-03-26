import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Portfolio from "../pages/Portfolio";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index:  true,
                element: <Portfolio/>
            },
        ]
    }
])