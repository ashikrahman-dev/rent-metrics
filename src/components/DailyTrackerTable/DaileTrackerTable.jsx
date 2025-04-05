import { useState } from "react";

export default function DailyTrackerTable() {
    // Unit type data with counts and statistics
    const initialUnitTypes = [
        { name: "Gross Potential Rent", units: "$400,000",budget:"$471,068" },
        { name: "Net Rental Income", units: "$400,000",budget:"$471,068" },
        { name: "Utility Income", units: "$39,000",budget:"$43,846" },
        { name: "Other Income", units: "$12,279",budget:"$18,999" },
    ];
    // Totals row
    const totalsRow = {
        units: "220",
        occupied: "203",
        vacant: "12",
    };

    // Table header configuration
    const tableHeaders = [
        { id: "unitType", label: "Category", sortable: true },
        { id: "units", label: "Actual", sortable: true },
        { id: "occupied", label: "Budget", sortable: true },
    ];



  

    return (
        <div className="bg-white rounded-2xl">
            <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-dark-9 text-sm font-bold text-dark-2">
                            {tableHeaders.map((header) => (
                                <th
                                    key={header.id}
                                    className={`py-3 px-3 text-left border-b border-r border-dark-5 border-b-dark-3 ${
                                        header.sortable ? "cursor-pointer" : ""
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <span>{header.label}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {initialUnitTypes.map((unitType, index) => (
                            <tr
                                key={index}
                                className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
                            >
                                {/* Unit Type */}
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                                    {unitType.name}
                                </td>

                                {/* Units */}
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                    {unitType.units}
                                </td>

                                {/* Inventory Status */}
                                <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm">
                                {unitType.budget}
                                </td>
                            </tr>
                        ))}

                        {/* Totals Row */}
                        <tr className="bg-main-shade text-sm font-medium">
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 uppercase font-bold">
                                Total Revenue
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.units}
                            </td>
                            <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold">
                                {totalsRow.occupied}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
