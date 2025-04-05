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
    { name: "Jan-24", value: 5.0, revenue: 90, target: 100 },
    { name: "Feb-24", value: 50.0, revenue: 140, target: 130 },
    { name: "Mar-24", value: 15.0, revenue: 120, target: 125 },
    { name: "Apr-24", value: 60.0, revenue: 200, target: 190 },
    { name: "May-24", value: 12.5, revenue: 180, target: 160 },
    { name: "Jun-24", value: 40.0, revenue: 255, target: 230 },
    { name: "Jul-24", value: 18.0, revenue: 120, target: 150 },
    { name: "Aug-24", value: 65.0, revenue: 180, target: 170 },
    { name: "Sep-24", value: 22.0, revenue: 115, target: 110 },
    { name: "Oct-24", value: 37.5, revenue: 200, target: 180 },
    { name: "Nov-24", value: 10.0, revenue: 150, target: 140 },
    { name: "Dec-24", value: 35.0, revenue: 65, target: 90 },
];

const barColors = {
    "Jan-24": "#FFC362",
    "Feb-24": "#45C7FF",
    "Mar-24": "#FFC362",
    "Apr-24": "#45C7FF",
    "May-24": "#FFC362",
    "Jun-24": "#45C7FF",
    "Jul-24": "#FFC362",
    "Aug-24": "#45C7FF",
    "Sep-24": "#FFC362",
    "Oct-24": "#45C7FF",
    "Nov-24": "#FFC362",
    "Dec-24": "#45C7FF",
};

export default function TrafficTrendChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-10">
            Retention, Availability & Traffic Trends 
            </h2>
            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
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
                            tickFormatter={(tick) => `${tick}`}
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
                            tickFormatter={(tick) => `${tick}%`}
                            domain={[0, "auto"]}
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
                                    fill={barColors[entry.name] || "#ccc"}
                                />
                            ))}
                        </Bar>
                        <Line
                            yAxisId="right"
                            name="Revenue"
                            type="linear"
                            dataKey="revenue"
                            stroke="#FFC362"
                            strokeWidth={1.5}
                            dot={false}
                        />
                        <Line
                            yAxisId="right"
                            name="Target"
                            type="linear"
                            dataKey="target"
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
