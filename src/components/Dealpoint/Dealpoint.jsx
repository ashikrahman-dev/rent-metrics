import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormData } from "../../context/PropertyContext";

const formatCurrency = (value) => {
    if (!value) return "";
    // Remove all non-numeric characters
    const numericValue = value.replace(/[^0-9.]/g, "");
    // Convert to number and format
    const number = parseFloat(numericValue);
    if (isNaN(number)) return "";
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(number);
};

const formatPercentage = (value) => {
    if (!value) return "";
    // Remove all non-numeric characters
    const numericValue = value.replace(/[^0-9.]/g, "");
    // Convert to number
    const number = parseFloat(numericValue);
    if (isNaN(number)) return "";
    return number + "%";
};

export default function Dealpoint() {

  const { updateFormData, handleFileUpload } = useFormData();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
      purchasePrice: "$1,000,000",
      purchaseDate: "",
      trailingNOI: "$100,000",
      debtAmount: "$750,000",
      equityAmount: "$250,000",
      loanAmount: "$750,000",
      interestRate: "4.5%",
      term: "5",
      interestOnlyPeriod: "12",
      mortgageCompany: "",
      uploadedFile: null,
  });

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      let formattedValue = value;

      // Format currency fields
      if (["purchasePrice", "trailingNOI", "debtAmount", "equityAmount", "loanAmount"].includes(name)) {
          formattedValue = formatCurrency(value);
      }
      // Format percentage fields
      else if (name === "interestRate") {
          formattedValue = formatPercentage(value);
      }

      setFormState((prevState) => ({
          ...prevState,
          [name]: formattedValue,
      }));
  };

  const handleFileUploadLocal = (e) => {
      const file = e.target.files[0];
      setFormState((prevState) => ({
          ...prevState,
          uploadedFile: file,
      }));
      handleFileUpload(file);
  };

  const handleDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setFormState((prevState) => ({
          ...prevState,
          uploadedFile: file,
      }));
      handleFileUpload(file);
  };

  const handleDragOver = (e) => {
      e.preventDefault();
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Save the form data to context
      updateFormData(formState);
      // Navigate to next step
      navigate("/PropertyManagement");
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
              onDragOver={handleDragOver} >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_26333_33515)">
<path d="M39.9927 17.6441C37.7742 8.80647 28.8117 3.44062 19.9741 5.65907C13.0677 7.39279 8.05291 13.3618 7.53622 20.4637C2.63241 21.2724 -0.687381 25.9032 0.121312 30.807C0.840202 35.1666 4.61773 38.3592 9.03605 38.3417H16.5352V35.342H9.03605C5.72273 35.342 3.03671 32.656 3.03671 29.3427C3.03671 26.0294 5.72273 23.3434 9.03605 23.3434C9.86443 23.3434 10.5359 22.6719 10.5359 21.8435C10.5284 14.3885 16.5659 8.3389 24.0209 8.33149C30.4743 8.32503 36.0296 12.8873 37.278 19.2188C37.4012 19.851 37.9143 20.3339 38.5528 20.4187C42.6532 21.0026 45.5037 24.7999 44.9199 28.9002C44.3956 32.5821 41.252 35.3235 37.5329 35.342H31.5336V38.3417H37.5329C43.3313 38.3242 48.0175 33.6094 47.9999 27.8111C47.9853 22.9844 44.6815 18.7895 39.9927 17.6441Z" fill="black"/>
<path d="M22.97 23.7785L16.9707 29.7778L19.0855 31.8926L22.5351 28.4579V42.8414H25.5348V28.4579L28.9694 31.8926L31.0842 29.7778L25.0848 23.7785C24.4998 23.1969 23.5551 23.1969 22.97 23.7785Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_26333_33515">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>

              <p className="text-dark-2 my-4 text-2xl font-bold leading-[1.3]">Choose a file or drag & drop it here.</p>
              <p className="text-dark-2 text-sm font-semibold mb-4">OR</p>
              <label className="cursor-pointer text-main underline hover:text-main-2 text-sm font-semibold">
                Choose File
                <input type="file" className="hidden" onChange={handleFileUploadLocal} required />
              </label>
              {formState.uploadedFile && (
                <p className="mt-4 text-green-600">File selected: {formState.uploadedFile.name}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-5 mt-8 pb-8">
          <Link
                to="/add-new-properties"
                className="flex justify-center py-[14px] px-6 rounded-lg bg-danger text-white text-base font-black hover:bg-danger/15 hover:text-danger"
            >
                Cancel
            </Link>
            <button
                onClick={handleSubmit}
                type="button"
                className="flex justify-center py-[14px] px-6 rounded-lg bg-success text-white text-base font-black transition-colors duration-200 hover:bg-success/15 hover:text-success"
            >
                Connect Data
            </button>
          </div>
        </form>
      </div>
    </section>
  );

  function renderInput(name, label, type = "text", placeholder = "", colSpan = 6) {
    // Determine if this is a currency input
    const isCurrency = ["purchasePrice", "trailingNOI", "debtAmount", "equityAmount", "loanAmount"].includes(name);
    const isPercentage = name === "interestRate";
    
    // Adjust placeholder based on input type
    let adjustedPlaceholder = placeholder;
    if (isCurrency) {
        adjustedPlaceholder = "$0";
    } else if (isPercentage) {
        adjustedPlaceholder = "0%";
    }

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
            type={type === "number" ? "text" : type}
            placeholder={adjustedPlaceholder}
            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
          />
        </div>
      </div>
    );
  }
}
