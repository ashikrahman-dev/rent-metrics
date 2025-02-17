import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function PropertySummary() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="w-full h-full">
                <DashboardHeader />
                <Dashboard />
            </div>
        </div>
    );
}
