import { Link } from "react-router-dom";
import { useState } from "react";
import threedot from "../../assets/images/threedot.svg"



const initialData = [
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },
  {
      unit: "101",
      progress: "In Progress",
      threedot: threedot
  },

];

const AddData = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

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
    <div>
      <form>
        {/* Property Information form */}
        <div className="bg-white p-6 rounded-lg mb-8">
          <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
            Property Data Entry
          </h4>
          <div className="grid grid-cols-12 gap-6 ">
            {/* City */}
            <div className="col-span-4">
              <label
                htmlFor="city"
                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
              >
                Property Name
              </label>
              <div className="mt-3">
                <input
                  id="city"
                  name="city"
                  type="date"
                  autoComplete="city"
                  placeholder="Property Name"
                  className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                />
              </div>
            </div>

            {/* State */}
            <div className="col-span-4">
              <label
                htmlFor="state"
                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
              >
                Address
              </label>
              <div className="mt-3">
                <input
                  id="state"
                  name="state"
                  type="text"
                  autoComplete="state"
                  placeholder="Address"
                  className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                />
              </div>
            </div>

            {/* Zip */}
            <div className="col-span-4">
              <label
                htmlFor="property-type"
                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
              >
                Unit Count
              </label>
              <select
                id="property-type"
                value={selectedOption}
                onChange={handleChange}
                className="block w-full mt-3 h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
              >
                <option value="" disabled>
                  -- Choose one --
                </option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="office">Office</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end ">
            <button className="text-sm py-[13px] px-7 mt-3 font-bold leading-[1.4] cursor-pointer transition-colors duration-200 rounded-md outline-none focus-visible:outline-none focus-visible:border-none hover:bg-blue-500 hover:text-white bg-main text-white">
              Save Property
            </button>
          </div>
        </div>
        {/* Property Information form */}

        <div className="bg-white p-6 rounded-lg mb-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-dark-1 text-xl font-bold leading-[1.3] mb-6">
              Unit Renovation
            </h4>
            <Link
              to="/add-new-properties"
              className="text-base px-6 py-[14px] border-[#54616B] border rounded-lg text-[#54616B] font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto mt-8 mb-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M8.39423 9.60577H3.75V8.39423H8.39423V3.75H9.60577V8.39423H14.25V9.60577H9.60577V14.25H8.39423V9.60577Z"
                  fill="#54616B"
                />
              </svg>
              Add New Unit
            </Link>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg">
            {/* <table className="w-full table-auto border-collapse font-red-hat-display">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  Unit Number
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">
                  Renovation Status
                  </th>
                  <th className="py-3 px-6 text-right text-sm font-medium text-gray-500">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {units.map((unit) => (
                  <tr key={unit.id} className="border-b border-gray-200">
                    <td className="py-4 px-6 text-sm text-gray-900">
                      {unit.UnitNumber}
                    </td>
                    <td className="py-4 px-6">{unit.RenovationStatus}</td>
                    <td className="py-4 px-6">
                      <div className="flex justify-end pr-3">
                        <img src={MoreVertical} className="text-gray-500 " />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}

<table className="w-full table-auto border-collapse font-red-hat-display">
                    <thead>
                        <tr className="bg-white text-dark-2 text-sm uppercase ">
                            {[
                                "Unit Number",
                                "Renovation Status",
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
                                        {row.progress}
                                    </span>
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
      </form>
    </div>
  );
};

export default AddData;
