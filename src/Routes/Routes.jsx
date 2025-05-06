import Root from "../root/Root";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import TabItems from "../Components/ourShop/TabItems";
import { createBrowserRouter, Navigate } from "react-router";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../pages/UserDashborad/UserHome"
import MyCart from "../pages/UserDashborad/MyCart";
import DashBoardRoot from "../root/DashBoardRoot";
import AdminHome from "../pages/UserDashborad/Admin/adminHome";
import AllUser from "../pages/UserDashborad/Admin/AllUser";
import AdminRoute from "./AdminRoute";
import IndexRouteHandler from "./IndexRouteHandler";
import AddItem from "../pages/UserDashborad/Admin/AddItem";
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
      { path: "/contactUs", Component: ContactUs },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
  {
    path: "/UserDashboard",
    element: <PrivateRoute><DashBoardRoot /></PrivateRoute>,
    children: [ 
      // admin routes 
      {index:true , element:<IndexRouteHandler />},
      {path: "adminHome" , element: <AdminRoute> <AdminHome /> </AdminRoute>},
      {path: "allUsers", element: <AdminRoute> <AllUser /> </AdminRoute>},
      {path: "addItem" , element: <AdminRoute><AddItem /></AdminRoute>},
      // user routes 
      {index:true , Component: UserHome},
      {path: "UserHome", Component: UserHome},
      {path:"MyCart" , Component: MyCart}
    ]
  }
]);
