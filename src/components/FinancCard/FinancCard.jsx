/* eslint-disable react/prop-types */
import dragIcon from "../../assets/images/drag-icon.svg";
//import tooltipIcon from "../../assets/images/title-tooltip-icon.svg";
import totalRevenue from "../../assets/images/total-revenue-icon.svg";
//import CardRadialChart from "../Charts/CardRadialChart/CardRadialChart";

export default function FinancCard({
    title,
    icon,
    number,
    statusLeft,
    statusmedil,
    statusRight,   
    statusLeftA,
    statusmedilA,
    statusRightA, 
    statusLeftB,
    statusmedilB,
    statusRightB,     

}) {
    return (
        <div className="bg-white rounded-lg p-4 relative col-span-1 h-full">
            {/* Drag Icon */}
            <img
                src={dragIcon}
                alt="Drag Icon"
                className="absolute right-3 top-3"
            />

            {/* Title and Icon */}
            <div className="flex gap-3 items-center mb-5.5">
                <img
                    src={icon || totalRevenue}
                    alt="Icon"
                    className="max-w-full"
                />
                <h6 className="text-sm text-dark-1 font-bold leading-[1.4] flex gap-3 items-center">
                    {title || "Total Revenue"}                    
                </h6>
            </div>

            <div className="flex justify-between items-end">                
                    {/* number Badge */}
                    {number ? (
                        <div className="items-start gap-3">
                            <span className="text-sm text-dark-2 font-bold leading-[1.4]    pe-2 py-0.5 relative">                                
                                {number || "Last year"}
                            </span>   
                        </div>
                    ) : (
                        <span className="opacity-0"></span>
                    )}

                    {/* Status Badge */}
                    {statusLeft ? (
                        <div className="w-full">                         
                            <span className="flex gap-6 justify-between items-center text-[14px] text-dark-2  relative">                                
                               <span>{statusLeft} </span> 
                               <span>{statusmedil } </span> 
                               <span>{statusRight}  </span>                              
                            </span>
                            <span className="flex justify-between text-[14px] text-dark-2  relative">                                
                               <span>{statusLeftA } </span> 
                               <span>{statusmedilA } </span> 
                               <span>{statusRightA }  </span>                              
                            </span>
                            <span className="flex justify-between text-[14px] text-dark-2  relative">                                
                               <span>{statusLeftB } </span> 
                               <span>{statusmedilB} </span> 
                               <span>{statusRightB } </span>                              
                            </span>                                                      
                        </div>
                    ) : (
                        <span className="opacity-0"></span>
                    )}                
            </div>
        </div>
    );
}
