    import Root from "../root/Root";
    import Home from "../pages/Home";
    import OurMenu from "../pages/OurMenu";
    import OurShop from "../pages/OurShop";
    import TabItems from "../Components/ourShop/TabItems";
    import { createBrowserRouter, Navigate } from "react-router";

    export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
        { index: true, Component: Home },
        { path: "/ourMenu", Component: OurMenu },
        {
            path: "/ourShop/:category",
            Component: OurShop,
            children: [
            { index: true, element: <Navigate to="salad" replace /> },
            { path: "salad", element: <TabItems categoryName={"salad"} /> },
            { path: "pizza", element: <TabItems categoryName={"pizza"} /> },
            { path: "soups", element: <TabItems categoryName={"soup"} /> },
            { path: "desserts", element: <TabItems categoryName={"dessert"} /> },
            { path: "drinks", element: <TabItems categoryName={"drinks"} /> },
            ],
        },
        ],
    },
    ]);
