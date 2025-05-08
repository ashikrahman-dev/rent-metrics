import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Legend,
} from "recharts";

const data = [
    { name: "Jan-24", actual: "10000", budget: "9500" },
    { name: "Feb-24", actual: "30000", budget: "29000" },
    { name: "Mar-24", actual: "50000", budget: "48000" },
    { name: "Apr-24", actual: "70000", budget: "69500" },
    { name: "May-24", actual: "90000", budget: "88000" },
    { name: "Jun-24", projection: "95000" },
    { name: "Jul-24", projection: "92000" },
    { name: "Aug-24", projection: "88000" },
    { name: "Sep-24", projection: "85000" },
    { name: "Oct-24", projection: "82000" },
    { name: "Nov-24", projection: "80000" },
    { name: "Dec-24", projection: "78000" },
];

const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};

export default function CurrentMonthActualChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1">
            <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-10">
                Budget vs Actuals Overview
            </h2>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                        barSize={12}
                        barGap={4}
                        maxBarSize={12}
                    >
                        <CartesianGrid
                            strokeDasharray="-1 3"
                            stroke="#E6E6EC"
                            strokeWidth={1}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="name"
                            interval={0}
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fontSize: 10,
                                fontWeight: 600,
                                fill: "#8E99A1",
                            }}
                            dy={10}
                            height={50}
                            textAnchor="middle"
                            scale="point"
                            padding={{ left: 30, right: 30 }}
                        />
                        <YAxis
                            tickFormatter={formatCurrency}
                            domain={[0, 100000]}
                            ticks={[10000, 30000, 50000, 70000, 90000, 100000]}
                            tick={{
                                fontSize: 14,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                            width={100}
                            axisLine={{ stroke: "#E6E6EC" }}
                        />
                        <Legend />
                        <Bar
                            dataKey="actual"
                            name="Actuals"
                            fill="#30D287"
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar
                            dataKey="budget"
                            name="Budget"
                            fill="#FFC362"
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar
                            dataKey="projection"
                            name="Projections"
                            fill="#68C8F8"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
