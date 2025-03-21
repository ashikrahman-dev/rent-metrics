import dragIcon from "../../../assets/images/drag-icon.svg";
import tooltipIcon from "../../../assets/images/title-tooltip-icon.svg";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const data = [
    { name: "Jan-24", NewLeases: 5, LastMonthAvg: 0, Market: 90 },
    { name: "Feb-24", NewLeases: 84, LastMonthAvg: 175, Market: 100 },
    { name: "Mar-24", NewLeases: 160, LastMonthAvg: 160, Market: 200 },
    { name: "Apr-24", NewLeases: 127, LastMonthAvg: 165, Market: 150 },
    { name: "May-24", NewLeases: 72, LastMonthAvg: 230, Market: 110 },
    { name: "Jun-24", NewLeases: 124, LastMonthAvg: 190, Market: 180 },
    { name: "July-24", NewLeases: 152, LastMonthAvg: 200, Market: 90 },
    { name: "Aug-24", NewLeases: 150, LastMonthAvg: 190, Market: 148 },
    { name: "Sep-24", NewLeases: 151, LastMonthAvg: 148, Market: 120 },
    { name: "Oct-24", NewLeases: 110, LastMonthAvg: 173, Market: 140 },
    { name: "Nov-24", NewLeases: 140, LastMonthAvg: 190, Market: 190 },
    { name: "Dec-24", NewLeases: 148, LastMonthAvg: 165, Market: 50 },
];

export default function RavenueyChart( {title} ) {
    return (
        <div className="bg-white p-6 rounded-lg relative">
            <img
                            src={dragIcon}
                            alt="Drag Icon"
                            className="absolute right-3 top-3"
                        />
            <h2 className="text-2xl font-bold text-dark-1 leading-[1.4] mb-6  flex gap-3 items-center">
            {title || "Revenue"}
            <button className="cursor-pointer">
                                    <img
                                        src={tooltipIcon}
                                        alt="Icon"
                                        className="max-w-full"
                                    />
                                </button>
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart accessibilityLayer data={data}>
                    <CartesianGrid
                        strokeDasharray="-1 3"
                        stroke="#fff"
                        strokeWidth={1}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#8E99A1",
                        }}
                    />
                    <YAxis                      
                     axisLine={false}             
                        tick={{                            
                            fontSize: 14,
                            fontWeight: 600,
                            fill: "#54616B",
                        }}
                    />
                    {/* <Tooltip /> */}
                    <Legend
                        shape="square"
                        layout="horizontal" // Horizontal layout
                        align="right" // Center the legend
                        verticalAlign="top" // Place the legend at the top
                        wrapperStyle={{
                            top: -20, // Offset from the top
                            left: "50%", // Center horizontally
                            transform: "translateX(-50%)", // Correct centering by adjusting from left
                            fontSize: 12, // Font size of legend text
                        }}
                    />
                    <Line
                        type="linear"
                        dataKey="LastMonthAvg"
                        stroke="#2970CC"
                        strokeWidth={1}
                        dot={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#2970CC",
                        }}
                    />
                    
                    <Line
                        type="linear"
                        dataKey="Market"
                        stroke="#30D287"
                        strokeWidth={1}
                        dot={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#30D287",
                        }}
                    />
                    <Line
                        type="linear"
                        dataKey="NewLeases"
                        stroke="#FF5050"
                        strokeWidth={1}
                        dot={false}
                        tick={{
                            fontSize: 10,
                            fontWeight: 600,
                            fill: "#FF5050",
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
