import  { useState } from "react";
const PropertySearch = () => {
    const [selected, setSelected] = useState("");
    const handleChange = (e) => {
        setSelected(e.target.value);
      };
  return (
    <div>
      <div className="p-6 bg-white rounded-lg">
      <div className="flex gap-4">
  {/* 4ta input item container */}
  <div className="flex flex-grow gap-4">
    <div className="flex-1">
      <label className="block mb-2 text-[16px] font-bold text-dark-1">First name</label>
      <input
        type="text"
        className="bg-dark-7 text-dark-2 font-medium text-sm rounded-lg border-0 outline-none focus:border-dark-5 w-full h-[52px] p-4"
        placeholder="Search property name"
      />
    </div>

    <div className="flex-1">
      <label className="block mb-2 text-[16px] font-bold text-dark-1">Acquisition Date</label>
      <input
        type="date"
        className="bg-dark-7 text-dark-2 font-medium text-sm rounded-lg border-0 outline-none focus:border-dark-5 w-full h-[52px] p-4"
      />
    </div>

    <div className="flex-1">
      <label className="block mb-2 text-[16px] font-bold text-dark-1">Period Ending</label>
      <input
        type="date"
        className="bg-dark-7 text-dark-2 font-medium text-sm rounded-lg border-0 outline-none focus:border-dark-5 w-full h-[52px] p-4"
      />
    </div>

    <div className="flex-1 relative">
      <label className="block mb-2 text-[16px] font-bold text-dark-1">Holding Period</label>
      <select
        className="appearance-none bg-dark-7 text-dark-2 text-sm font-medium rounded-lg border-0 outline-none focus:border-dark-5 w-full h-[52px] p-4 pr-10"
      >
        <option className="text-dark-2 text-sm font-medium" value="">05 years</option>
        <option className="text-dark-2 text-sm font-medium" value="option1">06 years</option>
        <option className="text-dark-2 text-sm font-medium" value="option2">07 years</option>
        <option className="text-dark-2 text-sm font-medium" value="option3">08 years</option>
      </select>
      <svg
        className="pointer-events-none absolute top-[56px] right-[10px] -translate-y-1/2"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path
            d="M10.2506 13.0271L17.7238 9.07066L16.944 7.59766L10.2506 11.1412L3.55716 7.59766L2.77734 9.07066L10.2506 13.0271Z"
            fill="#0C0E3A"
          />
        </g>
      </svg>
    </div>
  </div>

  {/* search button */}
  <div className="flex items-end">
    <button
      type="button"
      className="h-[52px] w-[133px] bg-main text-white rounded-lg text-[16px] font-black flex items-center justify-center gap-2" >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0252 13.8467L18.5941 17.4156L17.4156 18.5941L13.8467 15.0252C12.5634 16.0518 10.936 16.666 9.16602 16.666C5.02602 16.666 1.66602 13.306 1.66602 9.16602C1.66602 5.02602 5.02602 1.66602 9.16602 1.66602C13.306 1.66602 16.666 5.02602 16.666 9.16602C16.666 10.936 16.0518 12.5634 15.0252 13.8467ZM13.3533 13.2283C14.3723 12.1782 14.9993 10.7457 14.9993 9.16602C14.9993 5.9431 12.3889 3.33268 9.16602 3.33268C5.9431 3.33268 3.33268 5.9431 3.33268 9.16602C3.33268 12.3889 5.9431 14.9993 9.16602 14.9993C10.7457 14.9993 12.1782 14.3723 13.2283 13.3533L13.3533 13.2283Z" fill="white"/>
</svg>

     <span> Search</span>
    </button>
  </div>
</div>


      </div>
    </div>
  );
};

export default PropertySearch;
