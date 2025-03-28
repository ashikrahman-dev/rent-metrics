

import { Link } from "react-router-dom";
import OccupancyChartMain from "../OccupancyChartMain/OccupancyChartMain";

const expenseData = [
  { name: "O", value: 5.0 },
  { name: "N", value: 10.0 },
  { name: "D", value: 15.0 },
  { name: "E", value: 20.0 },
  { name: "F", value: 25.5 },
  { name: "M", value: 20.0 },
  { name: "A", value: 5.0 },
  { name: "M", value: 20.0 },
  { name: "J", value: 15.0 },
  { name: "J", value: 12.0 }, 
  { name: "A", value: 20.0 }, 
  { name: "S", value: 12.0 }, 
  
];
export default function OccupancyChart() {
  return (
    <section className="bg-white p-5 rounded-lg col-span-6">
      <div className="">
        <OccupancyChartMain
          title="Occupancy"
          data={expenseData}
          linearGradientId="Gradientrr"
          gradientStartColor="#"
          strokeColor="#"
        />
      </div>
    </section>
  );
}
