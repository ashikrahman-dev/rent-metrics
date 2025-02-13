import { Route, Routes } from "react-router";
import Home from "./pages/Home";
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
                <Route path="/request-a-demo" element={<RequestDemo />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </>
    );
}
