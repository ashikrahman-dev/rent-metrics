export default function RentRollSummaryTable() {
  const headers = [
    "Unit", 
    "Unit Type", 
    "Unit Resident", 
    "Name",
    "Market Charge",
    "Amount", 
    "Resident", 
    "Other Move In", 
    "Lease", 
    "Move Out", 
    "Balance", 
  ];

  const data = [
    // Row 1
    [
      { value: "Sq Ft", colspan: 4 },
      { value: "Rent Code", colspan: 4 },
      { value: "Deposit" },
      { value: "Deposit" },
      { value: "Expiration" }
    ],
    // Row 2
    [
      { value: "Current/Notice/Vacant Residents", colspan: 11 },
    ],
    // Row 3
    [
      { value: "1101"},
      { value: "AMCB4 "},
      { value: "1,337.00" },
      { value: "t0705639"},
      { value: "Paul Tyrrell" },
      { value: "2,422.00" },
      { value: "rent" },
      { value: "2,123.00" },
      { value: "500.00" },
      { value: "500.00" },
      { value: "12/12/2024" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "cable" },
      { value: "72.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "cable" },
      { value: "72.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "Total" },
      { value: "2,195.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: "1101"},
      { value: "AMCB4 "},
      { value: "1,337.00" },
      { value: "t0705639"},
      { value: "Paul Tyrrell" },
      { value: "2,422.00" },
      { value: "rent" },
      { value: "2,123.00" },
      { value: "500.00" },
      { value: "500.00" },
      { value: "12/12/2024" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "cable" },
      { value: "72.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "cable" },
      { value: "72.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "Total" },
      { value: "2,195.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: "1101"},
      { value: "AMCB4 "},
      { value: "1,337.00" },
      { value: "t0705639"},
      { value: "Paul Tyrrell" },
      { value: "2,422.00" },
      { value: "rent" },
      { value: "2,123.00" },
      { value: "500.00" },
      { value: "500.00" },
      { value: "12/12/2024" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "cable" },
      { value: "72.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "cable" },
      { value: "72.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "Total" },
      { value: "2,195.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: "1101"},
      { value: "AMCB4 "},
      { value: "1,337.00" },
      { value: "t0705639"},
      { value: "Paul Tyrrell" },
      { value: "2,422.00" },
      { value: "rent" },
      { value: "2,123.00" },
      { value: "500.00" },
      { value: "500.00" },
      { value: "12/12/2024" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "cable" },
      { value: "72.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "cable" },
      { value: "72.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
    [
      { value: " "},
      { value: " "},
      { value: "" },
      { value: ""},
      { value: "Total" },
      { value: "2,195.00" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" }
    ],
  ];
  

  return (
    <div className="bg-white rounded-2xl">
      <div className="w-full overflow-x-auto border rounded-2xl border-[#BBC5CD] font-red-hat-display">
        <table className="min-w-full border-collapse bg-white">
          <thead>
            <tr className="bg-white text-dark-2 font-semibold text-[14px] uppercase">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`py-2 px-4 text-center font-semibold text-[14px] border-b border-[#BBC5CD] ${idx !== headers.length - 1 ? 'border-r border-[#D8DFE5]' : ''}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
  {data.map((row, rowIdx) => (
    <tr key={rowIdx} className="hover:bg-gray-50">
      {row.map((cell, cellIdx) => {
        const colSpan = cell.colspan || 1;
        return (
          <td
            key={cellIdx}
            colSpan={colSpan}
            className={`p-2 text-center font-semibold text-[14px] border-b border-[#BBC5CD] ${cellIdx !== row.length - 1 ? 'border-r border-[#D8DFE5]' : ''}`}
          >
            {cell.value}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}
