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
    { 
        week: "Week 1",
        Revenue: 85000,
        Expenses: 45000,
        NOI: 40000
    },
    { 
        week: "Week 2",
        Revenue: 92000,
        Expenses: 48000,
        NOI: 44000
    },
    { 
        week: "Week 3",
        Revenue: 88000,
        Expenses: 42000,
        NOI: 46000
    },
    { 
        week: "Week 4",
        Revenue: 95000,
        Expenses: 50000,
        NOI: 45000
    }
];

const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};

export default function DailyFinancialTrackerChart() {
    return (
        <div className="bg-white p-6 rounded-lg col-span-1">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-lg font-bold text-dark-1 leading-[1.4]">
                    April 2024 Weekly Performance
                </h2>
            </div>

            <div className="w-full h-[300px] bg-white">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                        barSize={20}
                        barGap={32}
                    >
                        <CartesianGrid
                            strokeDasharray="-1 3"
                            stroke="#E9EDF0"
                            strokeWidth={1}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="week"
                            tick={{
                                fontSize: 12,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                            axisLine={{ stroke: "#E6E6EC" }}
                        />
                        <YAxis
                            tickFormatter={formatCurrency}
                            domain={[0, 100000]}
                            ticks={[10000, 30000, 50000, 70000, 90000, 100000]}
                            tick={{
                                fontSize: 12,
                                fontWeight: 600,
                                fill: "#54616B",
                            }}
                            axisLine={{ stroke: "#E6E6EC" }}
                        />
                        <Legend />
                        <Bar
                            dataKey="Revenue"
                            name="Revenue"
                            fill="#68C8F8"
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar
                            dataKey="Expenses"
                            name="Expenses"
                            fill="#2970CC"
                            radius={[10, 10, 0, 0]}
                        />
                        <Bar
                            dataKey="NOI"
                            name="NOI"
                            fill="#30D287"
                            radius={[10, 10, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
