import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import AddNewProperty from "./pages/AddNewProperty/AddNewProperty";
import NoPropertiesFound from "./pages/NoPropertiesFound/NoPropertiesFound";
import RequestDemo from "./pages/RequestDemo/RequestDemo";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ThankYou from "./pages/ThankYou/ThankYou";
import Welcome from "./pages/Welcome/Welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,// Only needed if this page has loaders/actions
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
        path: "/request-demo",
        element: <RequestDemo />,
    },
    {
        path: "/thank-you",
        element: <ThankYou />,
    },
    {
        path: "/properties",
        element: <NoPropertiesFound />,
    },
    {
        path: "/add-new-properties",
        element: <AddNewProperty />,
    },
    {
        path: "*",
        element: <NotFound />, // 404 handler
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
