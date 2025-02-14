import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const menuItems = [
    {
        title: "Dashboard",
        icon: "Dash",
        path: "/",
    },
    {
        title: "User Management",
        icon: "Users",
        submenu: [
            { title: "All Users", path: "/users" },
            { title: "Add User", path: "/users/add" },
            { title: "Roles", path: "/users/roles" },
        ],
    },
    {
        title: "Messages",
        icon: "Mail",
        path: "/messages",
    },
    {
        title: "Documents",
        icon: "FileText",
        submenu: [
            { title: "All Documents", path: "/documents" },
            { title: "Shared", path: "/documents/shared" },
            { title: "Archived", path: "/documents/archived" },
        ],
    },
    {
        title: "Notifications",
        icon: "Bell",
        path: "/notifications",
    },
    {
        title: "Settings",
        icon: "Settings",
        path: "/settings",
    },
];

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

    const toggleSubmenu = (index) => {
        setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
    };

    return (
        <div
            className={`bg-gray-900 text-white h-screen transition-all duration-300 ease-in-out ${
                isCollapsed ? "w-20" : "w-64"
            }`}
        >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h1
                    className={`font-bold text-xl ${
                        isCollapsed ? "hidden" : "block"
                    }`}
                >
                    Dashboard
                </h1>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
                >
                    <ChevronRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                            isCollapsed ? "rotate-0" : "rotate-180"
                        }`}
                    />
                </button>
            </div>

            <nav className="p-4">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={item.title}>
                            <div
                                className={`flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-800 ${
                                    item.submenu && openSubmenuIndex === index
                                        ? "bg-gray-800"
                                        : ""
                                }`}
                                onClick={() =>
                                    item.submenu ? toggleSubmenu(index) : null
                                }
                            >
                                <span className="flex items-center flex-1">
                                    {item.icon}
                                    <span
                                        className={`ml-3 transition-opacity duration-200 ${
                                            isCollapsed
                                                ? "opacity-0 hidden"
                                                : "opacity-100"
                                        }`}
                                    >
                                        {item.title}
                                    </span>
                                </span>
                                {item.submenu && !isCollapsed && (
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                            openSubmenuIndex === index
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                )}
                            </div>
                            {item.submenu && !isCollapsed && (
                                <ul
                                    className={`mt-2 ml-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                                        openSubmenuIndex === index
                                            ? "max-h-48"
                                            : "max-h-0"
                                    }`}
                                >
                                    {item.submenu.map((subItem) => (
                                        <li
                                            key={subItem.title}
                                            className="flex items-center p-2 text-gray-300 rounded-lg cursor-pointer hover:bg-gray-800"
                                        >
                                            <span className="w-5" />
                                            <span className="ml-3">
                                                {subItem.title}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
                <button
                    className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-800 text-red-400 ${
                        isCollapsed ? "justify-center" : ""
                    }`}
                >
                    {/* <LogOut className="w-5 h-5" /> */}
                    LogOut Icon
                    <span
                        className={`ml-3 transition-opacity duration-200 ${
                            isCollapsed ? "opacity-0 hidden" : "opacity-100"
                        }`}
                    >
                        Logout
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
