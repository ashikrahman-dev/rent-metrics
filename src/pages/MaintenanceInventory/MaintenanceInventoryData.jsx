import { useState } from "react";
import threedot from "../../assets/images/threedot.svg";

const initialData = [
  { id: 1, unit: "Item Name", details: 20, renoStatus: "Maintenance Staff", threedot: threedot },
  { id: 2, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },
  { id: 3, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },
  { id: 4, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },
  { id: 5, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },
  { id: 6, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },
  { id: 7, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },
  { id: 8, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },
  { id: 9, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },
  { id: 10, unit: "Another Item", details: 21, renoStatus: "Some Staff", threedot: threedot },


];

function YourTableRow({ row, openRowId, setOpenRowId }) {
  const showOptions = openRowId === row.id;

  const handleThreeDotClick = () => {
    setOpenRowId(showOptions ? null : row.id);
  };

  const handleEdit = () => {
    console.log('Edit clicked for row:', row);
    setOpenRowId(null); 
  };

  const handleDelete = () => {
    console.log('Delete clicked for row:', row);
    setOpenRowId(null);
  };

  return (
    <tr className="border-b border-b-dark-9 hover:bg-gray-100 text-dark-2 text-sm">
      <td className="px-4 py-4.5 font-medium text-dark-2 text-sm">
        {row.unit}
      </td>
      <td className="px-4 py-4.5">
        <span className="px-4 py-4.5 font-medium text-dark-2 text-sm">
          {row.details}
        </span>
      </td>
      <td className="px-4 py-4.5">
        {row.renoStatus}
      </td>
      <td className="px-4 py-4.5 flex justify-end text-right mr-4 relative">
        <button onClick={handleThreeDotClick}>
          <img src={row.threedot} alt="Options" className="cursor-pointer" />
        </button>
        {showOptions && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md z-10">
            <button
              onClick={handleEdit}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
            >
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}

const MaintenanceInventoryData = () => {
  const [sortColumn, setSortColumn] = useState("unit");
  const [sortOrder, setSortOrder] = useState("asc");
  const [openRowId, setOpenRowId] = useState(null); 

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedData = [...initialData].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
  });

  return (
    <div className="w-full bg-white rounded-lg">
      <div className=" bg-white rounded-lg">
        <table className="w-full table-auto border-collapse font-red-hat-display">
          <thead>
            <tr className="bg-white text-dark-2 text-sm uppercase ">
              {[
                "Item",
                "Quantity",
                "Used By",
              ].map((column) => (
                <th
                  key={column}
                  className="px-4 py-3 text-left cursor-pointer border-b border-b-dark-3"
                  onClick={() => handleSort(column)}
                >
                  {column.toUpperCase()}{" "}
                  {sortColumn === column &&
                    (sortOrder === "asc" ? "↑" : "↓")}
                </th>
              ))}
              <th className="px-4 py-3 text-right border-b border-b-dark-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row) => (
              <YourTableRow
                key={row.id}
                row={row}
                openRowId={openRowId}
                setOpenRowId={setOpenRowId}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaintenanceInventoryData;