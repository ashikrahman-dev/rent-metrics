import { Route, Routes } from "react-router";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home";
import NoPropertiesFound from "./pages/NoPropertiesFound/NoPropertiesFound";
import RequestDemo from "./pages/RequestDemo/RequestDemo";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import ThankYou from "./pages/ThankYou/ThankYou";
import Welcome from "./pages/Welcome/Welcome";

export default function App() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<App />} /> */}
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/request-demo" element={<RequestDemo />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route
                    path="/properties-not-found"
                    element={<NoPropertiesFound />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
