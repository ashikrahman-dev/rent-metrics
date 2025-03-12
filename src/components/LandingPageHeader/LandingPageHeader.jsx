import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import SignInPopUp from "../SignInPopUp/SignInPopUp";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";

const menuItems = [
    {
        id: 1,
        title: "Solution",
        url: "/solution",
    },
    {
        id: 2,
        title: "Products",
        url: "/products",
    },
    {
        id: 3,
        title: "Resources",
        url: "/resources",
    },
    {
        id: 4,
        title: "Company",
        url: "/company",
    },
    {
        id: 5,
        title: "Why Rent Metrics",
        url: "/home/why-rent-metrics",
    },
    {
        id: 6,
        title: "Business Intelligence",
        url: "/home/business-intelligence",
    },
];

export default function LandingPageHeader() {
    return (
        <header className="bg-white py-[30px] px-[30px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.03)]">
            <div className="container grid grid-cols-12 items-center gap-6 mx-auto">
                {/* Logo */}

                <Link to="/home" className="col-span-2">
                    <img src={logo} alt="Logo" className="max-w-full" />
                </Link>

                {/* Menu */}
                <div className="col-span-7 text-center flex xl:gap-10.5 lg:gap-6 gap-4 justify-center">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.url}
                            className="xl:text-lg lg:text-base text-sm text-dark-1 font-semibold hover:text-main transition-colors duration-200"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Back to Dashboard Button */}
                <div className="col-span-3 flex xl:gap-8 lg:gap-6 gap-4 items-center justify-end">
                    <SignInPopUp />
                    <SignUpPopUp />
                </div>
            </div>
        </header>
    );
}
