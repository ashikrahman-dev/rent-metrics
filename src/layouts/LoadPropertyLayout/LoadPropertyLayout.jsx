import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const LoadPropertyLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <Outlet />
        </>
    );
};

export default LoadPropertyLayout;
