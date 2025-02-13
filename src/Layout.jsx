import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="bg-gray-800 text-white p-4 text-center">
                <h1>My Website</h1>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4">
                <Outlet /> {/* This will render nested routes */}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; {new Date().getFullYear()} My Website</p>
            </footer>
        </div>
    );
};

export default Layout;
