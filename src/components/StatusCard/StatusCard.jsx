import dragIcon from "../../assets/images/drag-icon.svg";
import totalRevenue from "../../assets/images/total-revenue-icon.svg";

export default function StatusCard() {
    return (
        <div className="bg-white rounded-lg p-4 relative col-span-4">
            <img src={dragIcon} alt="Icon" className="absolute right-3 top-3" />
            <div className="flex gap-3 items-center mb-5.5">
                <img src={totalRevenue} alt="Icon" className="max-w-full" />
                <h6 className="text-sm text-dark-1 font-bold leading-[1.4]">
                    Total Revenue
                </h6>
            </div>
            {/* Value */}
            <span className="text-sm text-dark-2 font-bold leading-[1.4] border border-dark-4 rounded-full pl-12 pe-2 py-0.5 relative">
                <span className="bg-[#73EAB2] px-2 py-0.5 rounded-full text-dark-1 font-bold absolute left-[-1px] top-[-1px] h-[calc(100%+2px)]">12%</span>
                Last year
            </span>
            <h2 className="text-dark-1 text-4xl leading-[1.4] font-extrabold mt-2.5">
            $1.2M
            </h2>
        </div>
    );
}
