const data = {
    headers: ["Month", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Avg"],
    rows: [
        {
            label: "All Units",
            values: ["93.4%", "95.5%", "92.6%", "94.6%", "95.0%", "93.4%", "92.6%", "92.7%", "93.4%", "91.7%", "92.6%", "90.9%", "93.1%"],
        },
        {
            label: "Economic",
            values: ["67.8%", "86.2%", "92.7%", "83.1%", "84.8%", "81.4%", "82.3%", "82.2%", "84.7%", "77.3%", "80.3%", "83.0%", "83.0%"],
        },
    ],
};

export default function CustomTable() {
    return (
        <div className="w-full p-4 bg-white rounded-lg">
            <div className="overflow-x-auto bg-white rounded-lg">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-white text-[#54616B] text-[14px]">
                            {data.headers.map((header, index) => (
                                <th key={index} className="px-4 py-5 text-left ">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-100 text-dark-2 text-sm">
                                <td className="px-4 py-4.5 font-medium text-dark-2 ">
                                    {row.label}
                                </td>
                                {row.values.map((value, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-4 py-4.5 text-center  ${
                                            colIndex === 6 ? "bg-blue-100 font-bold text-blue-700" : ""
                                        }`}
                                    >
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
