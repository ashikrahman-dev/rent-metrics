import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import LoadPropertyLayout from "./layouts/LoadPropertyLayout/LoadPropertyLayout";
import AddNewProperty from "./pages/AddNewProperty/AddNewProperty";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import NoPropertiesFound from "./pages/NoPropertiesFound/NoPropertiesFound";
import RequestDemo from "./pages/RequestDemo/RequestDemo";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ThankYou from "./pages/ThankYou/ThankYou";
import Welcome from "./pages/Welcome/Welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />, // Only needed if this page has loaders/actions
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/request-demo",
        element: <RequestDemo />,
    },
    {
        path: "/thank-you",
        element: <ThankYou />,
    },
    {
        path: "/",
        element: <LoadPropertyLayout />,
        children: [
            { path: "/properties", element: <NoPropertiesFound /> },
            { path: "/add-new-properties", element: <AddNewProperty /> },
        ],
    },
    {
        path: "*",
        element: <NotFound />, // 404 handler
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
