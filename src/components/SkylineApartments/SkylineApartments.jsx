import downloadiconwhite from "../../assets/images/downloadwhite.svg";
import downloadicongray from "../../assets/images/downloadgray.svg";

import propertyphoto from "../../assets/images/propertyphoto.svg";
import lease from "../../assets/images/lease.svg";

const SkylineApartments = () => {

    const tableData = [
        {
          title: "Property Appraisal Report",
          updated: "Updated 2 weeks ago • 2.5 MB",
          leftIcon: propertyphoto,
          rightIcon: downloadiconwhite,
        },
        {
          title: "Financial Statements",
          updated: "Updated 1 month ago • 1.8 MB",
          leftIcon: lease,
          rightIcon: downloadicongray,
        },
        {
          title: "Lease Agreements",
          updated: "Updated 3 months ago • 3.2 MB",
          leftIcon: lease,
          rightIcon: downloadiconwhite,
        },
        {
          title: "Property Photos",
          updated: "Updated 1 week ago • 15.7 MB",
          leftIcon: propertyphoto,
          rightIcon: downloadicongray,
        },
      ];


  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-[22px] dark-1 font-bold leading-[1.4] mb-6">
        Property Documents
      </h3>
      <div className="overflow-hidden rounded-[8px] border border-[#D8DFE5]">
        <table className="table-auto w-full">
          <tbody>
            {tableData.map((item, index) => {
              const rowBgColor = index % 2 === 0 ? "#F2F4F6" : "#ffffff";
              return (
                <tr key={index} className="border-b border-[#D8DFE5]">
                  {/* Left TD */}
                  <td
                    className="p-4"
                    style={{ backgroundColor: rowBgColor }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={item.leftIcon}
                          alt="left-icon"
                        />
                      </div>
                      <div>
                        <h6 className="font-bold text-[18px] text-[#767676]">
                          {item.title}
                        </h6>
                        <p className="text-[14px] text-[#8E99A1] font-medium">
                          {item.updated}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Right TD */}
                  <td
                    className="p-4 text-center"
                    style={{ backgroundColor: rowBgColor }}
                  >
                    <img
                      src={item.rightIcon}
                      alt="download"
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center p-2 ">
            <p className="text-[#8E99A1] text-[16px]">Showing 5 of 12 documents</p>
            <p className="text-[#001924]">Showing 5 of 12 documents</p>
        </div>
    </div>
  );
};

export default SkylineApartments;
