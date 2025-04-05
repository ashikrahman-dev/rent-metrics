import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Cell,
} from "recharts";

const data = [
    { name: "Jan-24", value: 40, revenue: 150,  },
    { name: "Feb-24", value: 50.0, revenue: 200, },
    { name: "Mar-24", value: 35.0, revenue: 150,  },
    { name: "Apr-24", value: 20.0, revenue: 80, },
    { name: "May-24", value: 60.5, revenue: 250, },
    { name: "Jun-24", value: 40.0, revenue: 170, },
    { name: "Jul-24", value: 58.0, revenue: 240, },
    { name: "Aug-24", value: 50.0, revenue: 200, },
    { name: "Sep-24", value: 59.0, revenue: 240,},
    { name: "Oct-24", value: 37.5, revenue: 150, },
    { name: "Nov-24", value: 55.0, revenue: 220,},
    { name: "Dec-24", value: 35.0, revenue: 150, },
];

const barColors = {
    "Jan-24": "#A667FF",
    "Feb-24": "#3EA7E8",
    "Mar-24": "#A667FF",
    "Apr-24": "#3EA7E8",
    "May-24": "#A667FF",
    "Jun-24": "#3EA7E8",
    "Jul-24": "#A667FF",
    "Aug-24": "#3EA7E8",
    "Sep-24": "#A667FF",
    "Oct-24": "#3EA7E8",
    "Nov-24": "#A667FF",
    "Dec-24": "#3EA7E8",
};

export default function LeaseUpTrackerChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-10">
            Current Occupancy
            </h2>
            <div className="w-full h-[400px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 20, right: 20, left: 20, bottom: 0 }}
                        barSize={12}
                    >
                        <CartesianGrid
                            strokeDasharray="-1 3"
                            stroke="#E9EDF0"
                            strokeWidth={1}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="name"
                            tick={{
                                fontSize: 10,
                                fontWeight: 600,
                                fill: "#8E99A1",
                            }}
                        />
                        <YAxis
                            yAxisId="left"
                            domain={[0, 70]}
                            tick={{
                                fontSize: 14,
                                fontWeight: 600,
                                fill: "#8E99A1",
                            }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            domain={[0, "auto"]}
                            tickFormatter={(tick) => `$${tick}`}
                            tick={{
                                fontSize: 14,
                                fontWeight: 600,
                                fill: "#8E99A1",
                            }}
                        />
                        <Tooltip
                            formatter={(value, name) => {
                                if (name === "value")
                                    return [`${value}%`, "Conversion"];
                                if (name === "revenue")
                                    return [`$${value}`, "Revenue"];
                                if (name === "target")
                                    return [`$${value}`, "Target"];
                                return [value, name];
                            }}
                        />
                        <Legend
                            shape="square"
                            layout="horizontal"
                            align="right"
                            verticalAlign="top"
                            wrapperStyle={{
                                top: -20,
                                left: "50%",
                                transform: "translateX(-50%)",
                                fontSize: 12,
                            }}
                        />
                        <Bar
                            yAxisId="left"
                            name="Conversion"
                            dataKey="value"
                            radius={[10, 10, 0, 0]}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={barColors[entry.name] || "#E6E6EC"}
                                />
                            ))}
                        </Bar>
                        <Line
                            yAxisId="right"
                            name="Revenue"
                            type="linear"
                            dataKey="revenue"
                            stroke="#45C7FF"
                            strokeWidth={1.5}
                            dot={false}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
