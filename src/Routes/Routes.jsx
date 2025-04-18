import { createBrowserRouter, Routes } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {index: true, Component: Home},
            {path: "/ourMenu", Component: OurMenu}
        ]
    }
])