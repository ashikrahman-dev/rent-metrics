import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

const colors = ["#45C7FF", "#2970CC", "#30D287", "#45C7FF"];

const data = [
    { name: "Jan-24", value: 5.0, revenue: 10 },
    { name: "Feb-24", value: 10.0, revenue: 15 },
    { name: "Mar-24", value: 45.0, revenue: 25 },
    { name: "Apr-24", value: 8.0, revenue: 20 },
    { name: "May-24", value: 60.5, revenue: 40 },
    { name: "Jun-24", value: 20.0, revenue: 30 },
    { name: "Jul-24", value: 18.0, revenue: 35 },
    { name: "Aug-24", value: 65.0, revenue: 50 },
    { name: "Sep-24", value: 22.0, revenue: 45 },
    { name: "Oct-24", value: 48.5, revenue: 60 },
    { name: "Nov-24", value: 70.0, revenue: 65 },
    { name: "Dec-24", value: 5.0, revenue: 70 },
].map((entry, index) => ({
    ...entry,
    fill: colors[index % colors.length],
}));

export default function OccupancyTrend() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-10">
                Occupancy Trends
            </h2>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                        barSize={16}
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
                            domain={[0, 80]}
                            ticks={[10, 20, 30, 40, 50, 60, 70, 80]}
                            tick={{
                                fontSize: 14,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tickFormatter={(tick) => `${tick}`}
                            domain={[0, 80]}
                            ticks={[10, 20, 30, 40, 50, 60, 70, 80]}
                            tick={{
                                fontSize: 14,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                        <Bar
                            dataKey="value"
                            yAxisId="left"
                            radius={[10, 10, 0, 0]}
                            fill="fill"
                        />
                        <Line
                            yAxisId="right"
                            type="linear"
                            dataKey="revenue"
                            stroke="#001924"
                            strokeWidth={1.5}
                            dot={false}
                            tick={{
                                fontSize: 10,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}