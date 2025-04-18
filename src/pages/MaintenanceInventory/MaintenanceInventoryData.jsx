import { useState } from "react";
import threedot from "../../assets/images/threedot.svg"

const initialData = [
    {
        unit: "Item Name",
        details: 20,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },
    {
        unit: "Item Name",
        details: 21,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },
    {
        unit: "Item Name",
        details: 22,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },
    {
        unit: "Item Name",
        details: 23,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },
    {
        unit: "Item Name",
        details: 24,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },
    {
        unit: "Item Name",
        details: 25,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },
    {
        unit: "Item Name",
        details: 26,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },
    {
        unit: "Item Name",
        details: 27,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },
    {
        unit: "Item Name",
        details: 28,
        renoStatus: "Maintenance Staff",
        threedot: threedot
    },

];


const MaintenanceInventoryData = () => {
    const [sortColumn, setSortColumn] = useState("unit");
    const [sortOrder, setSortOrder] = useState("asc");

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
        <div className="w-full p-4 bg-white rounded-lg">
            <div className="overflow-x-auto bg-white rounded-lg">
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
                                    className="px-4 py-5 text-left cursor-pointer border-b border-b-dark-3"
                                    onClick={() => handleSort(column)}
                                >
                                    {column.toUpperCase()}{" "}
                                    {sortColumn === column &&
                                        (sortOrder === "asc" ? "↑" : "↓")}
                                </th>
                            ))}
                            <th className="px-4 py-5 text-right border-b border-b-dark-3">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b border-b-dark-9 hover:bg-gray-100 text-dark-2 text-sm"
                            >
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
                               
                                <td className="px-4 py-4.5 flex justify-end text-right">
                                    <img src={row.threedot} alt="" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default MaintenanceInventoryData
