import { Link } from "react-router-dom";
import DailyTrackerTable from "../../components/DailyTrackerTable/DaileTrackerTable";
import MMRReportTable from "../../components/MMRReportTable/MMRReportTable";

export default function MMRReport() {
    return (
        <section className="flex-1 p-8 bg-dark-10 min-h-[calc(100%-70px)] h-full overflow-y-auto py-20 relative z-0">
            {/* Heading & Button */}
            <div className="flex gap-6 justify-between items-center mb-[34px] pt-8">
                <h2 className="text-[28px] font-bold text-dark-1 leading-[1.35]">
                MMR Report
                </h2>
                <div className="flex gap-2.5">
                    {/* Edit Button */}
                    <input type="date" className="bg-transparent transition-all hover:bg-dark-5 text-dark-2 font-medium text-sm rounded-lg border-dark-4 border-1 outline-none focus:border-dark-5 w-full h-[52px] p-4" placeholder="17-Mar-25"
      />
                    <Link
                        to=""
                        className="text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.75 6.75V15.7444C15.75 16.1633 15.4164 16.5 15.0049 16.5H2.99505C2.58371 16.5 2.25 16.167 2.25 15.7561V2.24385C2.25 1.84148 2.58521 1.5 2.9987 1.5H10.5V6C10.5 6.41421 10.8358 6.75 11.25 6.75H15.75ZM15.75 5.25H12V1.50239L15.75 5.25ZM6 5.25V6.75H8.25V5.25H6ZM6 8.25V9.75H12V8.25H6ZM6 11.25V12.75H12V11.25H6Z"
                                fill="white"
                                className=" group-hover:fill-main transition-colors duration-200"
                            />
                        </svg>
                        Export
                    </Link>
                    {/* Share Button */}
                 
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="">
                    <div className="">
                        <MMRReportTable />
                    </div>
                </div>

            </div>
        </section>
    );
}
