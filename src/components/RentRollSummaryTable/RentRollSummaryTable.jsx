export default function RentRollSummaryTable() {
  // Financial data categories
  const tableRow = [
    "E1",
    "48",
    "576",
    "100%",
    "$1,285	",
    "$1,298	",
    "0",
    "0",
    "N/A",
    "$0",
    "0",
    "0",
    "0",
    "3",
    "$1,072",
    "5",
    "2",
    "3",

  ];
  const tableTotal = [
    "Total",
    "242",
    "00",
    "90.9%",
    "$1,603",
    "15",
    "8",
    "53%",
    "$1,691",
    "12",
    "4",
    "7",
    "5",
    "$1,362",
    "10",
    "16",
    "10",
    "3",

  ];

  // tableTitle for column headers
  const tableTitle = [
    "Number of +Unit",
    "Sq Ft",
    "Occ.%",
    "Avg Rent",
    "Market Rent",
    "Lease Exp.",
    "#Renew",
    "%Renew",
    "Avg Rate",
    "Total Vactes",
    "Early Vacates",
    "MTM Unit",
    "New Leases",
    "Avg Rate",
    "F-1 Exp",
    "F-2Exp",
    "F-3Exp",
  ];

  // Static financial data with unique values for each cell
  

  return (
    <div className="bg-white rounded-2xl">
      <div className="w-full overflow-x-auto border rounded-2xl border-[#BBC5CD] font-red-hat-display">
        <table className="min-w-full border-collapse bg-white">
          <thead>
            <tr className="bg-white text-sm font-bold text-dark-2">
              <th className="py-3 px-3 text-left border-b border-r border-[#BBC5CD] border-b-dark-3">
                Unit Type
              </th>
              {tableTitle.map((month) => (
                <th
                  key={month}
                  className="py-3 px-3 font-bold text-left border-b  border-[#BBC5CD] border-b-dark-3 font-[14px] text-[#54616B]"
                >
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>            
          <tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>
<tr>
  {tableRow.map((item, index) => (
    <td
      key={item}
      className={`py-3 px-3 font-medium text-left border-b ${
        index !== tableRow.length - 1 ? 'border-r' : ''
      } border-[#BBC5CD] font-[14px] text-[#54616B]`}
    >
      {item}
    </td>
  ))}
</tr>

<tr>
            {tableTotal.map((item, index) => (
                <td
                  key={item}
                  className={`py-3 px-3 font-bold text-[#001924]  text-left bg-[#E5E8FF]  ${
                    index !== tableRow.length - 1 ? 'border-r' : ''
                  } border-[#BBC5CD] font-[14px] text-[#54616B]`}
                  >
                  {item}
                </td>
              ))}             
            </tr> 
                      
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
