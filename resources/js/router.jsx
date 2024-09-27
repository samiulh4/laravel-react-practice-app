import { createBrowserRouter } from "react-router-dom";

import Guestlayout from "./layouts/Guestlayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

import SignIn from "./views/auth/SignIn.jsx";
import SignUp from "./views/auth/SignUp.jsx";

import WebHome from "./views/web/WebHome.jsx";
import AdminHome from "./views/admin/AdminHome.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WebHome />,
    },
    {
        path: "/",
        element: <Guestlayout />,
        children: [
            {
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <AdminHome />,
            },
        ],
    },
]);

export default router;
