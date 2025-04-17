import { useState } from "react";

export default function LeaseUpTrackerTable() {
    // Data from the provided table with unique fixed values for each asset
    const initialAssets = ["+Week Ending On ", "Shows/Tours Application %" ,"Gross Leases Cancels/Denials %", "Net Leases <br> Net Closing Ratio","Expiring Renewal %","Renewal <br> NTVS","Scheduled Move-Ins <br> Scheduled Move-Outs <br> Projected Skips/","Net Move-Ins","Additional Move-Ins ","Net Move-Ins w/Additional","Total Units <br> Occupied EOW <br> Non-Revenue","Occupancy % EOW",];

    // Fixed data for each asset and interest rate combination
    const occupancyData = [
        {
            label: "Current",
            values: ["03/17/25", " ", "0", "0 <br> #DIV/014", " ", "0 <br> 0",  " ","0"," ","0", "232 <br> 235 <br> 3", "72.31%" ],
        },
        {
            label: "Current",
            values: ["03/17/25", " ", "0", "0 <br> #DIV/014"," ","0 <br> 0",  " ","0", " ","0", "232 <br> 235 <br> 3", "72.31%"],
        },
        {
            label: "30 Day",
            values: ["03/17/25", " ",  "0", "0 <br> #DIV/014", " ","0 <br> 0",  " ","0", " ","0", "232 <br> 235 <br> 3", "72.31%"],
        },
        {
            label: "60 Day",
            values: ["04/17/25", " ",  "0", "0 <br> #DIV/014"," ","0 <br> 0",  " ","0", " ","0", "232 <br> 235 <br> 3", "72.31%"],
        },
        {
            label: "90 Day",
            values: ["04/17/25"," ", "0", "0 <br> #DIV/014"," ","0 <br> 0",  " ","0", " ","0", "232 <br> 235 <br> 3", "72.31%"],
        },
    ];

    // Create asset objects including original index to maintain data relationships when sorting
    const assetObjects = initialAssets.map((name, index) => ({ name, index }));


    // Sorting state
    const [assets, setAssets] = useState(assetObjects);
    const [sortDirection, setSortDirection] = useState("none"); // "none", "asc", or "desc"

    // Handle sorting for the ASSET column
    const handleAssetSort = () => {
        let newAssets = [...assets];
        let newDirection;

        if (sortDirection === "none" || sortDirection === "desc") {
            // Sort ascending
            newAssets.sort((a, b) => a.name.localeCompare(b.name));
            newDirection = "asc";
        } else {
            // Sort descending
            newAssets.sort((a, b) => b.name.localeCompare(a.name));
            newDirection = "desc";
        }

        setAssets(newAssets);
        setSortDirection(newDirection);
    };

    // Function to convert currency string to number
    const currencyToNumber = (currencyStr) => {
        return parseFloat(currencyStr.replace(/[$,]/g, ""));
    };

    // Function to format number as currency
    const formatCurrency = (number) => {
        return number.toLocaleString() + "%";
    };

    // Calculate totals for each rate
    const calculateTotals = () => {
        return occupancyData.map((rate) => {
            const total = rate.values.reduce((sum, value) => {
                return sum + currencyToNumber(value);
            }, 0);
            return formatCurrency(total);
        });
    };

    // Get calculated totals
    const totals = calculateTotals();

    return (
        <div className="bg-white rounded-2xl">
            <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="bg-whitet-sm font-bold text-dark-2 uppercase">
                            <th
                                className="py-3 px-5 text-left font-bold border-b border-r border-dark-5 border-b-dark-3 cursor-pointer "
                                onClick={handleAssetSort}
                            >
                                <div className="flex items-center">
                                    <span></span>
                                    <span className="ml-1">
                                    Columbia Pointe-Lease Up Plan
                                    </span>
                                </div>
                            </th>
                            {occupancyData.map((rate, idx) => (
                                <th
                                    key={idx}
                                    className="py-3 px-5 text-center font-bold border-b border-r border-dark-5 border-b-dark-3 last:border-r-0"
                                >
                                    {rate.label}
                                    <span className="text-xs block">{rate.date}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((asset, rowIdx) => (
                            <tr
                                key={rowIdx}
                                className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium "
                            >
                                <td className="p-5 text-left border border-dark-5 text-dark-2 font-bold text-sm border-l-0">
                                {asset.name.split('<br>').map((line, i) => ( <div key={i}>{line}</div> ))}
                                </td>
                                {occupancyData.map((rate, rateIdx) => (
    <td
        key={rateIdx}
        className="p-5 text-center font-bold border-b border-r border-dark-5 text-dark-2 last:border-r-0"
        dangerouslySetInnerHTML={{
            __html: rate.values[asset.index], // This will render the value and any HTML, like <br>
        }}
    />
))}

                            </tr>
                        ))}
                        <tr className="bg-main-shade text-sm font-medium">
                            <td className="py-5 px-6 text-left border border-dark-5 text-dark-1 uppercase font-bold">
                            Target Occupancy
                            </td>
                            {totals.map((total, idx) => (
                                <td
                                    key={idx}
                                    className="py-5 px-6 text-center border border-dark-5 font-bold text-dark-1"
                                >
                                    {total}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
