import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Link } from "react-router-dom";
import MonthlyPerformanceChart from "../../components/Charts/MonthlyPerformanceChart/MonthlyPerformanceChart";
import PropertyDetails from "../../components/PropertyDetails/PropertyDetails";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import StatusCard from "../../components/StatusCard/StatusCard";
import Valuation from "../../components/Valuation/Valuation";

export default function Overview() {
    return (
        <section className="flex-1 p-8 bg-dark-10 min-h-[calc(100%-70px)] h-full overflow-y-auto py-20 relative z-0">
            {/* Heading & Button */}
            <div className="flex gap-6 justify-between items-center mb-[34px] pt-8">
                <h2 className="text-[28px] font-bold text-dark-1 leading-[1.35]">
                    Property Summary
                </h2>
                <Link
                    to="/add-new-properties"
                    className="text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto"
                >
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.827 10.6729H4.66675V9.32676H9.827V4.1665H11.1732V9.32676H16.3334V10.6729H11.1732V15.8332H9.827V10.6729Z"
                            fill="white"
                            className="transition-all duration-200 group-hover:fill-main"
                        />
                    </svg>
                    Add Property
                </Link>
            </div>
            <Tabs defaultValue="overview" className="">
                <TabsList className="bg-white p-[5px] rounded-md inline-flex mb-8">
                    <TabsTrigger
                        value="overview"
                        className="text-sm py-[13px] px-7 text-dark-1 font-bold leading-[1.4] cursor-pointer transition-colors duration-200 rounded-md"
                    >
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="valuation"
                        className="text-sm py-[13px] px-7 text-dark-1 font-bold leading-[1.4] cursor-pointer transition-colors duration-200 rounded-md"
                    >
                        Valuation
                    </TabsTrigger>
                    <TabsTrigger
                        value="returns"
                        className="text-sm py-[13px] px-7 text-dark-1 font-bold leading-[1.4] cursor-pointer transition-colors duration-200 rounded-md"
                    >
                        Returns
                    </TabsTrigger>
                    <TabsTrigger
                        value="documents"
                        className="text-sm py-[13px] px-7 text-dark-1 font-bold leading-[1.4] cursor-pointer transition-colors duration-200 rounded-md"
                    >
                        Documents
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-7">
                            <div className="grid grid-cols-12 justify-between gap-6 mb-6">
                                <StatusCard />
                                <StatusCard />
                                <StatusCard />
                            </div>

                            <MonthlyPerformanceChart />
                        </div>
                        <div className="col-span-5 flex flex-col gap-6">
                            <PropertyDetails />
                            <RecentActivity />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="valuation">
                    <Valuation />
                </TabsContent>
                <TabsContent value="returns">
                    Change your User here.
                </TabsContent>
                <TabsContent value="documents">
                    Change your User here.
                </TabsContent>
            </Tabs>
        </section>
    );
}
