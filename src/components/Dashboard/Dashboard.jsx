import React from "react";

const stats = [
    {
        title: "Total Users",
        value: "24.8k",
        change: "+12%",
        icon: "User Icon",
        color: "bg-blue-500",
    },
    {
        title: "Active Projects",
        value: "145",
        change: "+8%",
        icon: "Activity Icon",
        color: "bg-green-500",
    },
    {
        title: "Documents",
        value: "2,456",
        change: "+23%",
        icon: "FileText Icon",
        color: "bg-purple-500",
    },
    {
        title: "Revenue",
        value: "$45.2k",
        change: "+15%",
        icon: "DollarSign Icon",
        color: "bg-yellow-500",
    },
];

const Dashboard = () => {
    return (
        <div className="flex-1 p-8 bg-gray-50">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">
                    Welcome back, Admin
                </h1>
                <p className="text-gray-600">
                    Here's what's happening with your projects today.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div
                                className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}
                            >
                                {React.cloneElement(stat.icon, {
                                    className: `w-6 h-6 ${stat.color.replace(
                                        "bg-",
                                        "text-"
                                    )}`,
                                })}
                            </div>
                            <span className="px-2.5 py-0.5 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-sm font-medium text-gray-600">
                            {stat.title}
                        </h3>
                        <p className="text-2xl font-semibold text-gray-800">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        Recent Activity
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="flex items-center p-4 bg-gray-50 rounded-lg"
                            >
                                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-800">
                                        User updated their profile
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        2 hours ago
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "Create Project",
                            "Add User",
                            "Upload Files",
                            "View Reports",
                        ].map((action) => (
                            <button
                                key={action}
                                className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100"
                            >
                                <p className="font-medium text-gray-800">
                                    {action}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Click to proceed
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
