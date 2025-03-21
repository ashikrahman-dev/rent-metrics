/* eslint-disable react/prop-types */

//import tooltipIcon from "../../assets/images/title-tooltip-icon.svg";

//import CardRadialChart from "../Charts/CardRadialChart/CardRadialChart";

import { Area, AreaChart, ResponsiveContainer } from "recharts";

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
export default function FinancCartCard({
  title,
  data,
  stopColor,
  strokeColor,
  linearGradientColor,
}) 




{
  return (
    <div className="bg-white rounded-lg p-4 relative col-span-1 h-full">
      {/* Title and Icon */}
      <div className="flex gap-3 items-center mb-5.5">
        <h6 className="text-sm text-dark-1 font-bold leading-[1.4] flex gap-3 items-center">
          {title || "Total Revenue"}
        </h6>
      </div>

      <div className="flex justify-between items-end">
        <div className="w-full h-[100px] bg-white">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 10, left: 0, bottom: 5 }}
            >
              {/* Gradient Definition */}
              <defs>
                <linearGradient
                  id={linearGradientColor || "linearGradientColor3"}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={stopColor || "#30D287"}
                    stopOpacity={0.6}
                  />
                  <stop offset="70%" stopColor="#fff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="linear"
                dataKey="value"
                stroke={strokeColor || "#30D2874D"}
                fill={`url(#${linearGradientColor || "linearGradientColor3"})`}
                strokeWidth={1}
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
