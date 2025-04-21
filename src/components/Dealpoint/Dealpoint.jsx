import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../../context/PropertyContext";

export default function Dealpoint() {

    const { formData, updateFormData, handleFileUpload } = useFormData();

  const [formState, setFormState] = useState({
    purchasePrice: "",
    purchaseDate: "",
    trailingNOI: "",
    debtAmount: "",
    equityAmount: "",
    loanAmount: "",
    interestRate: "",
    term: "",
    interestOnlyPeriod: "",
    mortgageCompany: "",
    uploadedFile: null, // Local state for file upload
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUploadLocal = (e) => {
    const file = e.target.files[0];
    setFormState((prevState) => ({
      ...prevState,
      uploadedFile: file,
    }));
    handleFileUpload(file); // ✅ Use context's handleFileUpload to set blob URL
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormState((prevState) => ({
      ...prevState,
      uploadedFile: file,
    }));
    handleFileUpload(file); // ✅ Use context's handleFileUpload to set blob URL
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formState);
    // Data submission logic here
  };

  return (
    <section className="bg-dark-8 pt-10 px-[30px] min-h-svh">
      <div className="container mx-auto">
        <div className="flex gap-6 items-center">
          <div className="w-full">
            <h2 className="text-[32px] text-dark-1 font-bold leading-[1.4] mb-2">Deal Points</h2>
            <p className="text-dark-2 text-base leading-[1.3] mb-8">
              Search for an existing property or add a new one to the system
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white p-6 rounded-lg mb-8">
            <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">Deal Points</h4>
            <div className="grid grid-cols-12 gap-6">
              {renderInput("purchasePrice", "Purchase Price", "text", "$ 0000.00.00")}
              {renderInput("purchaseDate", "Date of Purchase", "date")}
              {renderInput("trailingNOI", "Trailing 12 Month NOI", "text", "$ 0000.00.00", 4)}
              {renderInput("debtAmount", "Debt Amount at Purchase", "text", "$ 0000.00.00", 4)}
              {renderInput("equityAmount", "Equity Amount at Purchase", "number", "$ 0000.00.00", 4)}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg mb-8">
            <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">Debt Terms</h4>
            <div className="grid grid-cols-12 gap-6">
              {renderInput("loanAmount", "Loan Amount", "text", "$ 0000.00.00", 6)}
              {renderInput("interestRate", "Interest Rate", "text", "00%", 6)}
              {renderInput("term", "Term (Years)", "number", "5", 4)}
              {renderInput("interestOnlyPeriod", "Interest Only Period (Months)", "number", "12", 4)}
              {renderInput("mortgageCompany", "Mortgage Company", "text", "Mortgage Company", 4)}
            </div>

            <div
              className="border-2 border-dashed border-blue-300 rounded-lg p-10 mb-10 flex flex-col items-center justify-center text-center mt-6 bg-[rgba(41,112,204,.05)]"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <svg className="mb-4" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Icon Path */}
              </svg>
              <p className="text-dark-2 mb-4 text-2xl font-bold leading-[1.3]">Choose a file or drag & drop it here.</p>
              <p className="text-dark-2 text-sm font-semibold mb-4">OR</p>
              <label className="cursor-pointer text-main underline hover:text-main-2 text-sm font-semibold">
                Choose File
                <input type="file" className="hidden" onChange={handleFileUploadLocal} />
              </label>
              {formState.uploadedFile && (
                <p className="mt-4 text-green-600">File selected: {formState.uploadedFile.name}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-5 mt-8 pb-8">
            <Link
              to="/"
              className="flex justify-center py-[14px] px-6 rounded-lg bg-danger text-white text-base font-black hover:bg-danger/15 hover:text-danger"
            >
              Cancel
            </Link>
            <Link
              to="/PropertyManagement"
              className="flex justify-center py-[14px] px-6 rounded-lg bg-success text-white text-base font-black transition-colors duration-200 hover:bg-success/15 hover:text-success"
            >
              Connect Data
            </Link>
          </div>
        </form>
      </div>
    </section>
  );

  function renderInput(name, label, type = "text", placeholder = "", colSpan = 6) {
    return (
      <div className={`col-span-${colSpan}`} key={name}>
        <label htmlFor={name} className="block text-base font-bold text-dark-1">
          {label}
        </label>
        <div className="mt-3">
          <input
            id={name}
            name={name}
            value={formState[name]}
            onChange={handleInputChange}
            type={type}
            placeholder={placeholder}
            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
          />
        </div>
      </div>
    );
  }
}
