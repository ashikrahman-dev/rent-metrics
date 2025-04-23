import { useState } from "react";

export default function MMRReportTable() {
    const initialUnitTypes = [
        { name: "Budgeted Occupancy (Current Month)", col2: "93.20%", colspan: 2, colClass: "text-center" },
        { name: "Current Occupancy", col2: "93.20%", col3: "93.20%",  colClass: "text-center" },
        { name: "30-day", col2: "93.20%", col3: "93.20%", colClass: "text-center" },
        { name: "60-day", col2: "93.20%", col3: "93.20%",  colClass: "text-center" },
        { name: "90-day", col2: "93.20%", col3: "93.20%", colClass: "text-center" },
    ];
    const initialUnitTypes2 = [
        { name: "Amount/Type", col2: "$275/Look and Lease", col3: "", colClass: "text-center" },
        { name: "Description & Expiration", col2: "Look and Lease/Revolving", col3: "", colClass: "text-center" },
        { name: "Total Utilized Concessions", col2: "3", col3: "",  colClass: "text-center" },
        { name: "Total Spent (during the month)", col2: "$2,167", col3: " ",  colClass: "text-center" },
        { name: "Budget (for the month", col2: "$4,500", colspan: 2, colClass: "text-center" },
    ];
    const initialUnitTypes3 = [
        { name: "Expirations", col2: "16", col3: "23", col4: "17", colClass: "text-center" },
        { name: "Renewed", col2: "10 <br> 62.5%", col3: "10 <br> 62.5%", col4: "10 <br> 62.5%", colClass: "text-center" },
        { name: "Pending", col2: "0 <br> 0.0%", col3: "0 <br> 0.0%", col4: "10 <br> 62.5%", colClass: "text-center" },
        { name: "Total Utilized Concessions", col2: "3", col3: "",  colClass: "text-center" },
        { rowspan: 3, name: "Total Spent (during the month)", col2: "$2,167", col3: " ",   colClass: "text-center" },
        { rowspan: 1, name: "Total Spent (during the month)", col2: "$2,167", col3: " ",    colClass: "text-center" },
        {  name: "Total Spent (during the month)", col2: "$2,167", col3: " ",   colClass: "text-center" },
    ];
    const initialUnitTypes4 = [
        { name: "Leads", col2: "53", col3: "50", colClass: "text-center" },
        { name: "Current Occupancy", col2: "93.20%", col3: "93.20%",  colClass: "text-center" },
        { name: "30-day", col2: "93.20%", col3: "93.20%", colClass: "text-center" },
        { name: "60-day", col2: "93.20%", col3: "93.20%",  colClass: "text-center" },
        { name: "90-day", col2: "93.20%", col3: "93.20%", colClass: "text-center" },
        { name: "90-day", col2: "93.20%", col3: "93.20%", colClass: "text-center" },
        { name: "90-day", col2: "93.20%", col3: "93.20%", colClass: "text-center" },
        { name: "90-day", col2: "93.20%", col3: "93.20%", colClass: "text-center" },
    ];

    const Row1 = [
        { name: "Occupancy & Trends:", className: "text-left" },
        { name: "16-Mar", className: "justify-center" },
        { name: "9-Mar", className: "justify-center" },
    ];
    const Row2 = [
        { name: "Specials & Concessions:", className: "text-left" },
        { name: "New Leases", className: "justify-center" },
        { name: "Renewals", className: "justify-center" },
    ];
    const Row3 = [
        { name: "Renewals", className: "text-left" },
        { name: "Mar", className: "justify-center" },
        { name: "Apr", className: "justify-center" },
        { name: "May", className: "justify-center" },
    ];

    const lastRow = [
        { name: "Highlights & Notes:" },
    ];
    const lastRow2 = [
        { name: "Highlights & Notes:" },
        { name: "Offering 6-wks free on March immediate M/I ", colspan: 2 },
    ];
    const lastRow3 = [
        { name: "Highlights & Notes:" },
    ];

    return (
        <div>
            <div className="grid grid-cols-2 gap-6">
                <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                    <table className="min-w-full h-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-main-shade-2 text-sm font-bold text-dark-2">
                                {Row1.map((header, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-3 px-3 border-b border-r border-dark-5 border-b-dark-3 ${header.className || ""}`}
                                        style={idx === 0 ? { width: "278px" } : {}}
                                    >
                                        <div className={`flex items-center  ${header.className || ""}`}>
                                            <span>{header.name}</span>
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

                                    {/* If colspan is defined, render one <td> with colSpan */}
                                    {unitType.colspan ? (
                                        <td
                                            className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType.colClass || ""}`}
                                            colSpan={unitType.colspan}
                                        >
                                            {unitType.col2}
                                        </td>
                                    ) : (
                                        <>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType.colClass || ""}`}>
                                                {unitType.col2}
                                            </td>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType.colClass || ""}`}>
                                                {unitType.col3 || ""}
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}

                            {/* Totals Row */}
                            <tr className="bg-main-shade text-sm font-medium">
                                <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold" colSpan={3}>
                                    {lastRow[0].name}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                    <table className="min-w-full h-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-main-shade-2 text-sm font-bold text-dark-2">
                                {Row2.map((header2, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-3 px-3 border-b border-r border-dark-5 border-b-dark-3 ${header2.className || ""}`}
                                        style={idx === 0 ? { width: "278px" } : {}}
                                    >
                                        <div className={`flex items-center  ${header2.className || ""}`}>
                                            <span>{header2.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {initialUnitTypes2.map((unitType2, index) => (
                                <tr
                                    key={index}
                                    className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
                                >
                                    {/* Unit Type */}
                                    <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                                        {unitType2.name}
                                    </td>

                                    {/* If colspan is defined, render one <td> with colSpan */}
                                    {unitType2.colspan ? (
                                        <td
                                            className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}
                                            colSpan={unitType2.colspan}
                                        >
                                            {unitType2.col2}
                                        </td>
                                    ) : (
                                        <>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}>
                                                {unitType2.col2}
                                            </td>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}>
                                                {unitType2.col3 || ""}
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}

                            {/* Totals Row */}
                            <tr className="bg-main-shade text-sm font-medium">
                                <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold" colSpan={1}>
                                    {lastRow2[0].name}
                                </td>
                                <td className="py-3 px-3 text-center border border-dark-5 text-dark-1 font-bold" colSpan={2}>
                                    {lastRow2[1].name}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                    <table className="min-w-full h-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-main-shade-2 text-sm font-bold text-dark-2">
                                {Row3.map((header3, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-3 px-3 border-b border-r border-dark-5 border-b-dark-3 ${header3.className || ""}`}
                                        style={idx === 0 ? { width: "278px" } : {}}
                                    >
                                        <div className={`flex items-center  ${header3.className || ""}`}>
                                            <span>{header3.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                     
<tbody>
    {initialUnitTypes3.map((unitType3, index) => (
        <tr
            key={index}
            className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
        >
            {/* First Column */}
            <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                {unitType3.name}
            </td>

            {/* Column 2 */}
            <td
                className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType3.colClass || ""}`}
                rowSpan={unitType3.rowspan || 1}
                dangerouslySetInnerHTML={{ __html: unitType3.col2 }}
            />

            {/* Column 3 */}
            <td
                className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType3.colClass || ""}`}
                dangerouslySetInnerHTML={{ __html: unitType3.col3 || "" }}
            />

            {/* Column 4 (optional) */}
            {unitType3.col4 !== undefined && (
                <td
                    className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType3.colClass || ""}`}
                    dangerouslySetInnerHTML={{ __html: unitType3.col4 || "" }}
                />
            )}
        </tr>
    ))}

    {/* Totals Row */}
    <tr className="bg-main-shade text-sm font-medium">
        <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold" colSpan={4}>
            {lastRow3[0].name}
        </td>
    </tr>
</tbody>
                    </table>
                </div>

                <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                    <table className="min-w-full h-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-main-shade-2 text-sm font-bold text-dark-2">
                                {Row1.map((header, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-3 px-3 border-b border-r border-dark-5 border-b-dark-3 ${header.className || ""}`}
                                        style={idx === 0 ? { width: "278px" } : {}}
                                    >
                                        <div className={`flex items-center  ${header.className || ""}`}>
                                            <span>{header.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {initialUnitTypes4.map((unitType4, index) => (
                                <tr
                                    key={index}
                                    className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
                                >
                                    {/* Unit Type */}
                                    <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                                        {unitType4.name}
                                    </td>

                                    {/* If colspan is defined, render one <td> with colSpan */}
                                    {unitType4.colspan ? (
                                        <td
                                            className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType4.colClass || ""}`}
                                            colSpan={unitType4.colspan}
                                        >
                                            {unitType4.col2}
                                        </td>
                                    ) : (
                                        <>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType4.colClass || ""}`}>
                                                {unitType4.col2}
                                            </td>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType4.colClass || ""}`}>
                                                {unitType4.col3 || ""}
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}

                            {/* Totals Row */}
                            <tr className="bg-main-shade text-sm font-medium">
                                <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold" colSpan={3}>
                                    {lastRow[0].name}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                    <table className="min-w-full h-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-main-shade-2 text-sm font-bold text-dark-2">
                                {Row2.map((header2, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-3 px-3 border-b border-r border-dark-5 border-b-dark-3 ${header2.className || ""}`}
                                        style={idx === 0 ? { width: "278px" } : {}}
                                    >
                                        <div className={`flex items-center  ${header2.className || ""}`}>
                                            <span>{header2.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {initialUnitTypes2.map((unitType2, index) => (
                                <tr
                                    key={index}
                                    className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
                                >
                                    {/* Unit Type */}
                                    <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                                        {unitType2.name}
                                    </td>

                                    {/* If colspan is defined, render one <td> with colSpan */}
                                    {unitType2.colspan ? (
                                        <td
                                            className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}
                                            colSpan={unitType2.colspan}
                                        >
                                            {unitType2.col2}
                                        </td>
                                    ) : (
                                        <>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}>
                                                {unitType2.col2}
                                            </td>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}>
                                                {unitType2.col3 || ""}
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}

                            {/* Totals Row */}
                            <tr className="bg-main-shade text-sm font-medium">
                                <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold" colSpan={1}>
                                    {lastRow2[0].name}
                                </td>
                                <td className="py-3 px-3 text-center border border-dark-5 text-dark-1 font-bold" colSpan={2}>
                                    {lastRow2[1].name}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
                    <table className="min-w-full h-full border-collapse bg-white">
                        <thead>
                            <tr className="bg-main-shade-2 text-sm font-bold text-dark-2">
                                {Row2.map((header2, idx) => (
                                    <th
                                        key={idx}
                                        className={`py-3 px-3 border-b border-r border-dark-5 border-b-dark-3 ${header2.className || ""}`}
                                        style={idx === 0 ? { width: "278px" } : {}}
                                    >
                                        <div className={`flex items-center  ${header2.className || ""}`}>
                                            <span>{header2.name}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {initialUnitTypes2.map((unitType2, index) => (
                                <tr
                                    key={index}
                                    className="border border-dark-5 border-l-0 border-r-0 hover:bg-gray-50 text-sm font-medium"
                                >
                                    {/* Unit Type */}
                                    <td className="p-3 text-left border border-dark-5 text-dark-2 font-medium text-sm border-l-0">
                                        {unitType2.name}
                                    </td>

                                    {/* If colspan is defined, render one <td> with colSpan */}
                                    {unitType2.colspan ? (
                                        <td
                                            className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}
                                            colSpan={unitType2.colspan}
                                        >
                                            {unitType2.col2}
                                        </td>
                                    ) : (
                                        <>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}>
                                                {unitType2.col2}
                                            </td>
                                            <td className={`p-3 border border-dark-5 text-dark-2 font-medium text-sm ${unitType2.colClass || ""}`}>
                                                {unitType2.col3 || ""}
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}

                            {/* Totals Row */}
                            <tr className="bg-main-shade text-sm font-medium">
                                <td className="py-3 px-3 text-left border border-dark-5 text-dark-1 font-bold" colSpan={1}>
                                    {lastRow2[0].name}
                                </td>
                                <td className="py-3 px-3 text-center border border-dark-5 text-dark-1 font-bold" colSpan={2}>
                                    {lastRow2[1].name}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
