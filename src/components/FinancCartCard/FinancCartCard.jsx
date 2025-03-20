/* eslint-disable react/prop-types */

//import tooltipIcon from "../../assets/images/title-tooltip-icon.svg";

//import CardRadialChart from "../Charts/CardRadialChart/CardRadialChart";

import { Area, AreaChart, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Jan-24", value: 2.0 },
//   { name: "Feb-24", value: 3.6 },
//   { name: "Mar-24", value: 10.0 },
//   { name: "Apr-24", value: 8.0 },
//   { name: "May-24", value: 10.5 },
//   { name: "Jun-24", value: 0.0 },
//   { name: "Jul-24", value: 10.0 },
//   { name: "Aug-24", value: 10.0 },
//   { name: "Sep-24", value: 10.0 },
//   { name: "Oct-24", value: 3.5 },
//   { name: "Nov-24", value: 7.3 },
//   { name: "Dec-24", value: 5.0 },
// ];

export default function FinancCartCard({
  title,
  data,
  stopColor,
  strokeColor,
  linearGradientColor,
}) {
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
