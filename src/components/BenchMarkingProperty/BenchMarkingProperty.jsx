import BenchMarkingFinancial from "../Charts/BenchMarking/BenchMarkingFinancial";
import BenchMarkingOperations from "../Charts/BenchMarking/BenchMarkingOperations";
import BenchMarkingMarketing from "../Charts/BenchMarking/BenchMarkingMarketing";
import BenchMarkingExpensePerUnit from "../Charts/BenchMarking/BenchMarkingExpensePerUnit";

export default function BenchMarkingProperty() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <BenchMarkingFinancial />
        <BenchMarkingOperations />
        <BenchMarkingMarketing />
        <BenchMarkingExpensePerUnit />
      </div>
    </div>
  );
}
