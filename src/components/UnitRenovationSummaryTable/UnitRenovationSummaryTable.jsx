import { useState } from "react";

export default function UnitRenovationSummaryTable() {
  // First row data (4 items, acting as caption inside the table, not part of the header)
  const firstRow = [
    { label: "Occupied"},
  ];
  const thirdtablecaption = [
    { label: "Under Progress"},
  ];
  const costcaption = [
    { label: "Actual vs Budget Cost "},
  ];

  // Static data for 16 items
  const secondRow = [
    { label: "Unit Type ", value: "200" },
    { label: "# of Units ", value: "150" },
    { label: "Days to StartRenovation", value: "220" },
    { label: "Days to Renovate", value: "180" },
    { label: "Days Vacant", value: "250" },
    { label: "AVG Downtime", value: "300" },
    { label: "AVG OldAVG Old EffectiveRent", value: "280" },
    { label: "AVG OldAVG NEW EffectiveRent", value: "270" },
    { label: "LTO ($)", value: "320" },
    { label: "Of Which Premium ", value: "230" },
    { label: "AVG ROIC", value: "210" },
    { label: "AVG Adjusted ROIC", value: "240", },
  ];
  
  const costtable = [
    { label: "Unit Type ", value: "200" },
    { label: "# of Units ", value: "150" },
    { label: "AVG Budget Cost (per unit) ", value: "220" },
    { label: "AVG Actual Cost (per unit)", value: "180" },
    { label: "Variance ($)", value: "250" },
    { label: "Total Budget ", value: "300" },
    { label: "Total Actual ", value: "280" },
    { label: "Variance ($)", value: "270" },
  ];
  // Static data for 16 items
  const secondTable = [
    { label: "Unit Type ", value: "200" },
    { label: "# of Units  ", value: "150" },
    { label: "AVG Downtime ", value: "220" },
    { label: "OF Which After Make Ready", value: "180" },
  ];
  const thirdTable = [
    { label: "Unit Type ", value: "200" },
    { label: "# of Units  ", value: "150" },
    { label: "AVG Downtime ", value: "220" },
  ];
  const fourTable = [
    { label: "Unit Type ", value: "200" },
    { label: "# of Units  ", value: "150" },
  ];

  // Additional rows with static values and some background colors
  const additionalRows = [
    {
      id: 1,
      values: [
        "Studio",
        "0",
        " ",
        " ",
        " ",
        " ",
        "",
        "",
        "",
        "",
        "",
        "",
       
      ],
      bg: "bg-white",
    },
    {
      id: 2,
      values: [
        "1BR",
        "4",
        "104",
        "39",
        "67",
        "200",
        "$1,865",
        "$1,852",
        "-$13",
        "185",
        "16.7%",
        "13.8%",
      ],
      bg: "bg-white",
    },
    {
      id: 3,
      values: [
        "2BR",
        "4",
        "104",
        "39",
        "67",
        "200",
        "$1,865",
        "$1,852",
        "-$13",
        "185",
        "16.7%",
        "13.8%",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "3BR",
        "4",
        "104",
        "39",
        "67",
        "200",
        "$1,865",
        "$1,852",
        "-$13",
        "185",
        "16.7%",
        "13.8%",
      ],
      bg: "bg-white",
    },
    {
      id: 5,
      values: [
        "Total",
        "17",
        "67",
        "39",
        "67",
        "200",
        "$2,191",
        "$2,308",
        "$117",
        "175",
        "15.0%",
        "12.3%",
      ],
      bg: "bg-white",
    },
  
  
  ];
  const additionalRows5 = [
    {
      id: 1,
      values: [
        "Studio",
        "0",
        " ",
        " ",
        " ",
        " ",
        "",
        "",
        
       
      ],
      bg: "bg-white",
    },
    {
      id: 2,
      values: [
        "1BR",
        "4",
        "104",
        "39",
        "67",
        "200",
        "$1,865",
        "$1,852",
      ],
      bg: "bg-white",
    },
    {
      id: 3,
      values: [
        "2BR",
        "4",
        "104",
        "39",
        "67",
        "200",
        "$1,865",
        "$1,852",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "3BR",
        "4",
        "104",
        "39",
        "67",
        "200",
        "$1,865",
        "$1,852",
      ],
      bg: "bg-white",
    },
    {
      id: 5,
      values: [
        "Total",
        "17",
        "67",
        "39",
        "67",
        "200",
        "$2,191",
        "$2,308",
      ],
      bg: "bg-white",
    },
  
  
  ];
  const additionalRows2 = [
    {
      id: 1,
      values: [
        "Studio",
        "0",
        "104",
        "39",
      
      ],
      bg: "bg-white",
    },
    {
      id: 2,
      values: [
        "1BR",
        "4",
        "104",
        "39",
      ],
      bg: "bg-white",
    },
    {
      id: 3,
      values: [
        "2BR",
        "4",
        "104",
        "39",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "3BR",
        "4",
        "104",
        "39",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "Total",
        "4",
        "417",
        "242",
      ],
      bg: "bg-white",
    },
  
  ];
  const additionalRows3 = [
    {
      id: 1,
      values: [
        "Studio",
        "0",
        "104",
      
      ],
      bg: "bg-white",
    },
    {
      id: 2,
      values: [
        "1BR",
        "4",
        "104",
      ],
      bg: "bg-white",
    },
    {
      id: 3,
      values: [
        "2BR",
        "4",
        "104",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "3BR",
        "4",
        "104",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "Total",
        "4",
        "417",
      ],
      bg: "bg-white",
    },
  
  ];
  const additionalRows4 = [
    {
      id: 1,
      values: [
        "Studio",
        "0",
      
      ],
      bg: "bg-white",
    },
    {
      id: 2,
      values: [
        "1BR",
        "4",
      ],
      bg: "bg-white",
    },
    {
      id: 3,
      values: [
        "2BR",
        "4",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "3BR",
        "4",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "Total",
        "4",
      ],
      bg: "bg-white",
    },
  
  ];
  

  return (
    <div>
           <div className="bg-white rounded-2xl mt-6">
      <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
        {/* First Row as caption inside the table */}
        <div className="bg-main-shade-2 text-sm font-bold text-dark-2 w-full flex items-center justify-between">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="py-3 px-3 text-left border border-dark-5 border-b-dark-3 w-full flex items-center justify-between"
            >
              <div className="flex items-center">
                <span>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table starts here */}
        <table className="min-w-full border-collapse bg-white">
          {/* Second Row (16 columns, table headers) */}
          <thead>
            <tr className="bg-white text-sm font-bold text-dark-2">
              {secondRow.map((item, index) => (
                <th
                  key={index}
                  className="py-3 px-3 text-center border-b border-r border-dark-5 border-b-dark-3 text-[12px] text-dark-2 font-bold"
                  style={{ width: index === 0 ? "200px" : "auto" }}
                >
                  <div className="flex items-center">
                    <span>{item.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
  {additionalRows.map((row, index) => (
    <tr
      key={index}
      className={`text-sm font-medium ${index === additionalRows.length - 1 ? "" : row.bg}`}
      style={index === additionalRows.length - 1 ? { backgroundColor: "#E5E8FF" } : {}}
    >
      {row.values.map((value, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === row.values.length - 1;

        let customStyle = {
          width: isFirst ? "200px" : isLast ? "120px" : "auto",
        };

        if (value === "Not Started") {
          customStyle = {
            ...customStyle,
            color: "#FF5050",
            backgroundColor: "#FFE3E3",
          };
        } else if (value === "Completed") {
          customStyle = {
            ...customStyle,
            color: "#30D287",
            backgroundColor: "#DDFFEF",
          };
        }

        return (
          <td
            key={idx}
            className={`p-3 border border-dark-5 text-[12px] font-bold ${isFirst ? "text-left" : "text-center"}`}
            style={customStyle}
          >
            {value}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>


        </table>
      </div>
    </div>


    <div className="grid grid-cols-3 gap-6">

    <div className="bg-white rounded-2xl mt-6">
      <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
        {/* First Row as caption inside the table */}
        <div className="bg-main-shade-2 text-sm font-bold text-dark-2 w-full flex items-center justify-between">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="py-3 px-3 text-left border border-dark-5 border-b-dark-3 w-full flex items-center justify-between"
            >
              <div className="flex items-center">
                <span>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table starts here */}
        <table className="min-w-full border-collapse bg-white">
          {/* Second Row (16 columns, table headers) */}
          <thead>
            <tr className="bg-white text-sm font-bold text-dark-2">
              {secondTable.map((item, index) => (
                <th
                  key={index}
                  className="py-3 px-3 text-center border-b border-r border-dark-5 border-b-dark-3 text-[12px] text-dark-2 font-bold"
                >
                  <div className="flex items-center justify-center">
                    <span>{item.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
  {additionalRows2.map((row, index) => (
    <tr
      key={index}
      className={`text-sm font-medium ${index === additionalRows2.length - 1 ? "" : row.bg}`}
      style={index === additionalRows2.length - 1 ? { backgroundColor: "#E5E8FF" } : {}}
    >
      {row.values.map((value, idx) => {
        return (
          <td
            key={idx}
            className="p-3 border border-dark-5 text-[12px] font-bold text-center"
          >
            {value}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>


        </table>
      </div>
    </div>





    <div className="bg-white rounded-2xl mt-6">
      <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
        {/* First Row as caption inside the table */}
        <div className="bg-main-shade-2 text-sm font-bold text-dark-2 w-full flex items-center justify-between">
          {thirdtablecaption.map((item, index) => (
            <div
              key={index}
              className="py-3 px-3 text-left border border-dark-5 border-b-dark-3 w-full flex items-center justify-between"
            >
              <div className="flex items-center">
                <span>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table starts here */}
        <table className="min-w-full border-collapse bg-white">
          {/* Second Row (16 columns, table headers) */}
          <thead>
            <tr className="bg-white text-sm font-bold text-dark-2">
              {thirdTable.map((item, index) => (
                <th
                  key={index}
                  className="py-3 px-3 text-center border-b border-r border-dark-5 border-b-dark-3 text-[12px] text-dark-2 font-bold"
                >
                  <div className="flex items-center justify-center">
                    <span>{item.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
  {additionalRows3.map((row, index) => (
    <tr
      key={index}
      className={`text-sm font-medium ${index === additionalRows3.length - 1 ? "" : row.bg}`}
      style={index === additionalRows3.length - 1 ? { backgroundColor: "#E5E8FF" } : {}}
    >
      {row.values.map((value, idx) => {
        return (
          <td
            key={idx}
            className="p-3 border border-dark-5 text-[12px] font-bold text-center"
          >
            {value}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>


        </table>
      </div>
    </div>




    <div className="bg-white rounded-2xl mt-6">
      <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
        {/* First Row as caption inside the table */}
        <div className="bg-main-shade-2 text-sm font-bold text-dark-2 w-full flex items-center justify-between">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className="py-3 px-3 text-left border border-dark-5 border-b-dark-3 w-full flex items-center justify-between"
            >
              <div className="flex items-center">
                <span>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table starts here */}
        <table className="min-w-full border-collapse bg-white">
          {/* Second Row (16 columns, table headers) */}
          <thead>
            <tr className="bg-white text-sm font-bold text-dark-2">
              {fourTable.map((item, index) => (
                <th
                  key={index}
                  className="py-3 px-3 text-center border-b border-r border-dark-5 border-b-dark-3 text-[12px] text-dark-2 font-bold"
                >
                  <div className="flex items-center justify-center">
                    <span>{item.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
  {additionalRows4.map((row, index) => (
    <tr
      key={index}
      className={`text-sm font-medium ${index === additionalRows4.length - 1 ? "" : row.bg}`}
      style={index === additionalRows4.length - 1 ? { backgroundColor: "#E5E8FF" } : {}}
    >
      {row.values.map((value, idx) => {
        return (
          <td
            key={idx}
            className="p-3 border border-dark-5 text-[12px] font-bold text-center"
          >
            {value}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>


        </table>
      </div>
    </div>

    </div>



    <div className="bg-white rounded-2xl mt-6">
      <div className="w-full overflow-x-auto border rounded-2xl border-dark-5 font-red-hat-display">
        {/* First Row as caption inside the table */}
        <div className="bg-main-shade-2 text-sm font-bold text-dark-2 w-full flex items-center justify-between">
          {costcaption.map((item, index) => (
            <div
              key={index}
              className="py-3 px-3 text-left border border-dark-5 border-b-dark-3 w-full flex items-center justify-between"
            >
              <div className="flex items-center">
                <span>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table starts here */}
        <table className="min-w-full border-collapse bg-white">
          {/* Second Row (16 columns, table headers) */}
          <thead>
            <tr className="bg-white text-sm font-bold text-dark-2">
              {costtable.map((item, index) => (
                <th
                  key={index}
                  className="py-3 px-3 text-center border-b border-r border-dark-5 border-b-dark-3 text-[12px] text-dark-2 font-bold"
                  style={{ width: index === 0 ? "200px" : "auto" }}
                >
                  <div className="flex items-center">
                    <span>{item.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
  {additionalRows5.map((row, index) => (
    <tr
      key={index}
      className={`text-sm font-medium ${index === additionalRows5.length - 1 ? "" : row.bg}`}
      style={index === additionalRows5.length - 1 ? { backgroundColor: "#E5E8FF" } : {}}
    >
      {row.values.map((value, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === row.values.length - 1;

        let customStyle = {
          width: isFirst ? "200px" : isLast ? "120px" : "auto",
        };

        if (value === "Not Started") {
          customStyle = {
            ...customStyle,
            color: "#FF5050",
            backgroundColor: "#FFE3E3",
          };
        } else if (value === "Completed") {
          customStyle = {
            ...customStyle,
            color: "#30D287",
            backgroundColor: "#DDFFEF",
          };
        }

        return (
          <td
            key={idx}
            className={`p-3 border border-dark-5 text-[12px] font-bold ${isFirst ? "text-left" : "text-center"}`}
            style={customStyle}
          >
            {value}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>


        </table>
      </div>
    </div>



    </div>
  );
}
