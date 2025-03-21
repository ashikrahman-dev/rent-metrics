import BenchMarkingFinancial from "../Charts/BenchMarking/BenchMarkingFinancial";
import BenchMarkingOperations from "../Charts/BenchMarking/BenchMarkingOperations";
import BenchMarkingMarketing from "../Charts/BenchMarking/BenchMarkingMarketing";
import BenchMarkingExpensePerUnit from "../Charts/BenchMarking/BenchMarkingExpensePerUnit";

const expenseData = [
  { name: "Jan-24", value: 5.0 },
  { name: "Feb-24", value: 10.0 },
  { name: "Mar-24", value: 15.0 },
  { name: "Apr-24", value: 8.0 },
  { name: "May-24", value: 12.5 },
  { name: "Jun-24", value: 20.0 },
];

export default function BenchMarkingProperty() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <BenchMarkingFinancial />
        <BenchMarkingOperations />
        <BenchMarkingMarketing />
        <BenchMarkingExpensePerUnit title="Expense Per Unit"  data={expenseData}/>
      </div>
    </div>
  );
}
