import { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Payroll", value: 300 },
  { name: "Advertising", value: 200 },
  { name: "Administrative", value: 600 },
  { name: "R&M", value: 100 },
  { name: "Utilities", value: 70 },
  { name: "Property Management Free", value: 120 },
  { name: "Property Taxes", value: 80 },
];

const COLORS = [
  "#FF2113",
  "#45C7FF",
  "#2970CC",
  "#00DAC5",
  "#779F9E",
  "#FFD43C",
  "#779F9E",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    // <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //   {`${(percent * 100).toFixed(0)}%`}
    // </text>
    <></>
  );
};

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";
  render() {
    return (
      <div className="grid grid-cols-2 gap-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={100} height={100}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={130}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div>
          {data.map((item, index) => (
            <li key={item} className="flex gap-2 py-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="14"
                height="14"
              >
                <path
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                  fill={COLORS[index % COLORS.length]}
                />
              </svg>
              {item.name}
            </li>
          ))}
        </div>
      </div>
    );
  }
}
