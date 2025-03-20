import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan-24", value: "5.0" },
  { name: "Feb-24", value: "10.0" },
  { name: "Mar-24", value: "15.0" },
  { name: "Apr-24", value: "8.0" },
  { name: "May-24", value: "12.5" },
  { name: "Jun-24", value: "20.0" },
  { name: "Jul-24", value: "18.0" },
  { name: "Aug-24", value: "25.0" },
  { name: "Sep-24", value: "22.0" },
  { name: "Oct-24", value: "17.5" },
  { name: "Nov-24", value: "10.0" },
  { name: "Dec-24", value: "5.0" },
];

export default function BenchMarkingOperations() {
  return (
    <div className="bg-white p-6 rounded-lg col-span-1">
      <h2 className="text-lg font-bold text-dark-1 leading-[1.4] mb-10 flex gap-4 items-center">
        Operations
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_24111_21171)">
            <path
              d="M8 16.5C6.41775 16.5 4.87104 16.0308 3.55544 15.1518C2.23985 14.2727 1.21447 13.0233 0.608967 11.5615C0.00346629 10.0997 -0.15496 8.49113 0.153721 6.93928C0.462403 5.38743 1.22433 3.96197 2.34315 2.84315C3.46197 1.72433 4.88743 0.962403 6.43928 0.653721C7.99113 0.34504 9.59966 0.503466 11.0615 1.10897C12.5233 1.71447 13.7727 2.73985 14.6518 4.05544C15.5308 5.37104 16 6.91775 16 8.5C15.9977 10.621 15.1541 12.6545 13.6543 14.1543C12.1545 15.6541 10.121 16.4977 8 16.5ZM8 1.83334C6.68146 1.83334 5.39253 2.22433 4.2962 2.95687C3.19987 3.68942 2.34539 4.73061 1.84081 5.94878C1.33622 7.16695 1.2042 8.5074 1.46144 9.80061C1.71867 11.0938 2.35361 12.2817 3.28596 13.214C4.21831 14.1464 5.4062 14.7813 6.6994 15.0386C7.99261 15.2958 9.33305 15.1638 10.5512 14.6592C11.7694 14.1546 12.8106 13.3001 13.5431 12.2038C14.2757 11.1075 14.6667 9.81855 14.6667 8.5C14.6647 6.73249 13.9617 5.03792 12.7119 3.7881C11.4621 2.53828 9.76752 1.83528 8 1.83334Z"
              fill="#8E99A1"
            />
            <path
              d="M9.33341 13.167H8.00008V8.50033H6.66675V7.16699H8.00008C8.3537 7.16699 8.69284 7.30747 8.94289 7.55752C9.19294 7.80757 9.33341 8.1467 9.33341 8.50033V13.167Z"
              fill="#8E99A1"
            />
            <path
              d="M8 5.83301C8.55228 5.83301 9 5.38529 9 4.83301C9 4.28072 8.55228 3.83301 8 3.83301C7.44772 3.83301 7 4.28072 7 4.83301C7 5.38529 7.44772 5.83301 8 5.83301Z"
              fill="#8E99A1"
            />
          </g>
          <defs>
            <clipPath id="clip0_24111_21171">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </h2>

      <div className="w-full h-[300px] bg-white">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
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
              tickFormatter={(tick) => `${tick}%`}
              domain={[0, 25]}
              ticks={[0, 5, 10, 15, 20, 25]}
              tick={{
                fontSize: 14,
                fontWeight: 600,
                fill: "#54616B",
              }}
            />
            {/* <Tooltip formatter={(value) => `${value}%`} /> */}
            <Bar dataKey="value" fill="#45C7FF" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
