import { createBrowserRouter, Routes } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {index: true, Component: Home},
        ]
    }
])