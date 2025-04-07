import { Link } from "react-router-dom";
import RentRollSummaryTable from "../../components/RentRollSummaryTable/RentRollSummaryTable";
import FrontFacing from "../../components/Charts/FrontFacing/FrontFacing";
import dragIcon from "../../assets/images/drag-icon.svg";
import tooltipIcon from "../../assets/images/title-tooltip-icon.svg";

export default function RentRollSummary() {
  return (
    <section className="flex-1 p-8 bg-dark-10 min-h-[calc(100%-70px)] h-full overflow-y-auto py-20 relative z-0">
      {/* Heading & Button */}
      <div className="flex gap-6 justify-between items-center mb-[34px] pt-8">
        <h2 className="text-[28px] font-bold text-dark-1 leading-[1.35]">
          Rent Roll Summary
        </h2>
        <div className="flex gap-2.5">
          <Link
            to="/add-new-properties"
            className="text-base px-[17px] py-2 border border-dark-2 bg-transparent rounded-lg text-dark-2 font-black transition-colors duration-200 hover:bg-dark-2 hover:text-white cursor-pointer inline-flex items-center gap-2 group col-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M3.98081 16.1255C3.60194 16.1255 3.28125 15.9943 3.01875 15.7318C2.75625 15.4693 2.625 15.1486 2.625 14.7697V4.73131C2.625 4.35244 2.75625 4.03175 3.01875 3.76925C3.28125 3.50675 3.60194 3.3755 3.98081 3.3755H5.01919V1.78906H6.17306V3.3755H11.8558V1.78906H12.9808V3.3755H14.0192C14.3981 3.3755 14.7188 3.50675 14.9813 3.76925C15.2438 4.03175 15.375 4.35244 15.375 4.73131V14.7697C15.375 15.1486 15.2438 15.4693 14.9813 15.7318C14.7188 15.9943 14.3981 16.1255 14.0192 16.1255H3.98081ZM3.98081 15.0005H14.0192C14.0769 15.0005 14.1298 14.9764 14.1778 14.9283C14.2259 14.8803 14.25 14.8274 14.25 14.7697V7.73131H3.75V14.7697C3.75 14.8274 3.77406 14.8803 3.82219 14.9283C3.87019 14.9764 3.92306 15.0005 3.98081 15.0005ZM3.75 6.60631H14.25V4.73131C14.25 4.67356 14.2259 4.62069 14.1778 4.57269C14.1298 4.52456 14.0769 4.5005 14.0192 4.5005H3.98081C3.92306 4.5005 3.87019 4.52456 3.82219 4.57269C3.77406 4.62069 3.75 4.67356 3.75 4.73131V6.60631Z"
                fill="#54616B"
              />
            </svg>
            Last 30 Dates
          </Link>
          <Link
            to="/add-new-properties"
            className="text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-2 group col-auto"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 6.75V15.7444C15.75 16.1633 15.4164 16.5 15.0049 16.5H2.99505C2.58371 16.5 2.25 16.167 2.25 15.7561V2.24385C2.25 1.84148 2.58521 1.5 2.9987 1.5H10.5V6C10.5 6.41421 10.8358 6.75 11.25 6.75H15.75ZM15.75 5.25H12V1.50239L15.75 5.25ZM6 5.25V6.75H8.25V5.25H6ZM6 8.25V9.75H12V8.25H6ZM6 11.25V12.75H12V11.25H6Z"
                fill="white"
                className=" group-hover:fill-main transition-colors duration-200"
              />
            </svg>
            Export
          </Link>
        </div>
      </div>

      <div>
        <RentRollSummaryTable />
      </div>
      {/* <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl mt-8 h-[400px] relative">
          <img
            src={dragIcon}
            alt="Drag Icon"
            className="absolute right-3 top-3"
          />
          <h2 className="text-2xl font-bold text-dark-1 leading-[1.4] mb-6  flex gap-3 items-center">
            Front Facing
            <button className="cursor-pointer">
              <img src={tooltipIcon} alt="Icon" className="max-w-full" />
            </button>
          </h2>          
          <FrontFacing />
        </div>
      </div> */}
    </section>
  );
}
