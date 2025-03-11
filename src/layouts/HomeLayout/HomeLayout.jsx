import { Outlet } from "react-router-dom";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";

export default function HomeLayout() {
    return (
        <>
            <LandingPageHeader />

            <Outlet />
        </>
    );
}
