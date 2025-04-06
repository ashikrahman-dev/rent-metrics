import { useState } from "react";

export default function CapExTrackerTable() {
  // First row data (4 items, acting as caption inside the table, not part of the header)
  const firstRow = [
    { label: "UW vs. Actual CapEX", value: "500,000" },
    { label: "UW/Business Plan", value: "450,000" },
    { label: "Actual", value: "480,000" },
  ];

  // Static data for 16 items
  const secondRow = [
    { label: "Item", value: "200" },
    { label: "Y1", value: "150" },
    { label: "Y2", value: "220" },
    { label: "Y3", value: "180" },
    { label: "Y4", value: "250" },
    { label: "Y5", value: "300" },
    { label: "Total Planned", value: "280" },
    { label: "Y1", value: "270" },
    { label: "Acquisition-to-Date Actual", value: "320" },
    { label: "Called Prev. & Reserved Funds ", value: "260" },
    { label: "Reallocation of Funds ", value: "230" },
    { label: "Q1-2025 Draw Request ", value: "210" },
    {
      label: "Total Spending (inc. reserved funds & draw request) ",
      value: "240",
    },
    { label: "Remaining Budget", value: "300" },
    { label: "Remaining Budget w/o Reallocation", value: "330" },
    { label: "Project Status", value: "310" },
  ];

  // Additional rows with static values and some background colors
  const additionalRows = [
    {
      id: 1,
      values: [
        "",
        "30-Jun-25",
        "30-Jun-26",
        "30-Jun-27",
        "30-Jun-28",
        "30-Jun-29",
        "",
        "",
        "",
        "",
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
        "Site/Grounds/Exterlors",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
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
      id: 3,
      values: [
        "Concrete Repairs - Parking Lot & Trip Hazards",
        "$20,000",
        "$0",
        "$0",
        "$0",
        "$0",
        "$20,000",
        "$4,968",
        "$4,968",
        "$0",
        "$0",
        "$0",
        "$4,968",
        "$15,032",
        "$15,032",
        "Not Started",
      ],
      bg: "bg-white",
    },
    {
      id: 4,
      values: [
        "Carports",
        "$20,000",
        "$0",
        "$0",
        "$0",
        "$0",
        "$20,000",
        "$4,968",
        "$4,968",
        "$0",
        "$0",
        "$0",
        "$4,968",
        "$15,032",
        "$15,032",
        "Completed",
      ],
      bg: "bg-white",
    },
    {
      id: 5,
      values: [
        "Landscaping - Tree Trimming & Clearing",
        "$20,000",
        "$0",
        "$0",
        "$0",
        "$0",
        "$20,000",
        "$4,968",
        "$4,968",
        "$0",
        "$0",
        "$0",
        "$4,968",
        "$15,032",
        "$15,032",
        "Completed",
      ],
      bg: "bg-white",
    },
    {
      id: 6,
      values: [
        "Total Site/Grounds/Exteriors",
        "$77,500",
        "$0",
        "$0",
        "$0",
        "$0",
        "$77,500",
        "$77,844",
        "$77,844",
        "$0",
        "$0",
        "$0",
        "$23,360",
        "$101,204",
        "$23,704",
        "---",
      ],
      bg: "bg-main-shade",
    },
    {
      id: 7,
      values: [
        " -",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
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
      id: 8,
      values: [
        "Buildings",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      bg: "bg-dark-5",
    },
    {
        id: 9,
        values: [
          "Concrete Repairs - Parking Lot & Trip Hazards",
          "$20,000",
          "$0",
          "$0",
          "$0",
          "$0",
          "$20,000",
          "$4,968",
          "$4,968",
          "$0",
          "$0",
          "$0",
          "$4,968",
          "$15,032",
          "$15,032",
          "Not Started",
        ],
        bg: "bg-white",
      },
      {
        id: 10,
        values: [
          "Carports",
          "$20,000",
          "$0",
          "$0",
          "$0",
          "$0",
          "$20,000",
          "$4,968",
          "$4,968",
          "$0",
          "$0",
          "$0",
          "$4,968",
          "$15,032",
          "$15,032",
          "In Progress",
        ],
        bg: "bg-white",
      },
      {
        id: 11,
        values: [
          "Landscaping - Tree Trimming & Clearing",
          "$20,000",
          "$0",
          "$0",
          "$0",
          "$0",
          "$20,000",
          "$4,968",
          "$4,968",
          "$0",
          "$0",
          "$0",
          "$4,968",
          "$15,032",
          "$15,032",
          "Completed",
        ],
        bg: "bg-white",
      },
  ];

  return (
    <div className="bg-white rounded-2xl mt-8">
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
                  {item.label}: {item.value}
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
                  className="py-2 px-2 text-center border-b border-r border-dark-5 border-b-dark-3 text-[12px] text-dark-2 font-bold"
                  style={{ width: index === 0 ? "200px" : "auto" }}
                >
                  <div className="flex items-center justify-center text-center">
                    <span>{item.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
  {additionalRows.map((row, index) => (
    <tr key={index} className={`${row.bg} text-sm font-medium`}>
      {row.values.map((value, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === row.values.length - 1;

        // Width logic
        let customStyle = {
          width: isFirst ? "200px" : isLast ? "120px" : "auto",
        };

        // Status color logic
        if (value === "Not Started") {
          customStyle = {
            ...customStyle,
            color: "#FF5050",
            backgroundColor: "#FFE3E3",
          };
        } 
        
        if (value === "In Progress") {
            customStyle = {
              ...customStyle,
              color: "#F5A421",
              backgroundColor: "#FFF4E2",
            };
          } 

        else if (value === "Completed") {
          customStyle = {
            ...customStyle,
            color: "#30D287",
            backgroundColor: "#DDFFEF",
          };
        }

        return (
          <td
            key={idx}
            className={`p-2 border border-dark-5 text-[12px] font-bold ${isFirst ? "text-left" : "text-center"}`}
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
  );
}
