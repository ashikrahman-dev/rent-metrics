import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dealpoint() {
    const [formData, setFormData] = useState({
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
        uploadedFile: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFormData((prevState) => ({
            ...prevState,
            uploadedFile: file,
        }));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFormData((prevState) => ({
            ...prevState,
            uploadedFile: file,
        }));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // Connect data logic would go here
    };

    return (
        <section className="bg-dark-8 pt-10 px-[30px] min-h-svh">
            <div className="container mx-auto">
                <div className="flex gap-6 items-center">
                    <div className="w-full">
                        <h2 className="text-[32px] text-dark-1 font-bold leading-[1.4] mb-2">
                            Deal Points
                        </h2>
                        <p className="text-dark-2 text-base leading-[1.3] mb-8">
                            Search for an existing property or add a new one to
                            the system
                        </p>
                    </div>
                </div>

                <div className="">
                    {/* Form - start */}
                    <form onSubmit={handleSubmit}>
                        {/* Property Information form */}
                        <div className="bg-white p-6 rounded-lg mb-8">
                            <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                                Deal Points
                            </h4>
                            <div className="grid grid-cols-12 gap-6 ">
                                {/* Property Name */}
                                <div className="col-span-6">
                                    <label
                                        htmlFor="purchase_price"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Purchase Price
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="purchase_price"
                                            name="purchase_price"
                                            value={formData.purchasePrice}
                                            onChange={handleInputChange}
                                            type="text"
                                            autoComplete="property_name"
                                            placeholder="$ 0000.00.00"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>

                                {/* Property Address */}
                                <div className="col-span-6">
                                    <label
                                        htmlFor="purchaseDate"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Date of Purchase
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="purchaseDate"
                                            name="purchaseDate"
                                            value={formData.purchaseDate}
                                            onChange={handleInputChange}
                                            type="date"
                                            autoComplete="property_address"
                                            placeholder="08-04-2025"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>

                                {/* City */}
                                <div className="col-span-4">
                                    <label
                                        htmlFor="trailingNOI"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Trailing 12 Month NOI
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="trailingNOI"
                                            name="trailingNOI"
                                            value={formData.trailingNOI}
                                            onChange={handleInputChange}
                                            type="date"
                                            autoComplete="city"
                                            placeholder="08-04-2025"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>

                                {/* State */}
                                <div className="col-span-4">
                                    <label
                                        htmlFor="debtAmount"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Debt Amount at Purchase
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="debtAmount"
                                            name="debtAmount"
                                            value={formData.debtAmount}
                                            onChange={handleInputChange}
                                            type="text"
                                            autoComplete="state"
                                            placeholder="$ 0000.00.00"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>

                                {/* Zip */}
                                <div className="col-span-4">
                                    <label
                                        htmlFor="equityAmount"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Equity Amount at Purchase
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="equityAmount"
                                            name="equityAmount"
                                            value={formData.equityAmount}
                                            onChange={handleInputChange}
                                            type="number"
                                            autoComplete="zip_code"
                                            placeholder="$ 0000.00.00"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Property Information form */}

                        <div className="bg-white p-6 rounded-lg mb-8">
                            <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                                Debt Terms:
                            </h4>
                            <div className="grid grid-cols-12 gap-6 ">
                                {/* Property Name */}
                                <div className="col-span-6">
                                    <label
                                        htmlFor="loanAmount"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Loan Amount
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="loanAmount"
                                            name="loanAmount"
                                            value={formData.loanAmount}
                                            onChange={handleInputChange}
                                            type="text"
                                            autoComplete="property_name"
                                            placeholder="$ 0000.00.00"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>

                                {/* Property Address */}
                                <div className="col-span-6">
                                    <label
                                        htmlFor="interestRate"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Interest Rate
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="interestRate"
                                            name="interestRate"
                                            value={formData.interestRate}
                                            onChange={handleInputChange}
                                            type="date"
                                            autoComplete="property_address"
                                            placeholder="00%"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>

                                {/* City */}
                                <div className="col-span-4">
                                    <label
                                        htmlFor="term"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Term (Years)
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="term"
                                            name="term"
                                            value={formData.term}
                                            onChange={handleInputChange}
                                            type="date"
                                            autoComplete="2025"
                                            placeholder="08-04-2025"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>

                                {/* State */}
                                <div className="col-span-4">
                                    <label
                                        htmlFor="interestOnlyPeriod"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Interest Only Period (Months)
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="interestOnlyPeriod"
                                            name="interestOnlyPeriod"
                                            value={formData.interestOnlyPeriod}
                                            onChange={handleInputChange}
                                            type="date"
                                            autoComplete="state"
                                            placeholder="08-04-2025"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>

                                {/* Zip */}
                                <div className="col-span-4">
                                    <label
                                        htmlFor="mortgageCompany"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Mortgage Company
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="mortgageCompany"
                                            name="mortgageCompany"
                                            value={formData.mortgageCompany}
                                            onChange={handleInputChange}
                                            type="number"
                                            autoComplete="zip_code"
                                            placeholder="Mortgage Company"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>
                                {/* <div className="col-span-12">
                                    <label
                                        htmlFor="zip_code"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="zip_code"
                                            name="zip_code"
                                            type="number"
                                            autoComplete="zip_code"
                                            placeholder="Mortgage Company"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div> */}
                            </div>

                            {/* File Upload Section */}

                            <div
                                className="border-2 border-dashed border-blue-300 rounded-lg p-10 mb-10 flex flex-col items-center justify-center text-center mt-6  bg-[rgba(41,112,204,.05)]"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                <div className="mb-4">
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_26333_33515)">
                                            <path
                                                d="M39.9927 17.6441C37.7742 8.80647 28.8117 3.44062 19.9741 5.65907C13.0677 7.39279 8.05291 13.3618 7.53622 20.4637C2.63241 21.2724 -0.687381 25.9032 0.121312 30.807C0.840202 35.1666 4.61773 38.3592 9.03605 38.3417H16.5352V35.342H9.03605C5.72273 35.342 3.03671 32.656 3.03671 29.3427C3.03671 26.0294 5.72273 23.3434 9.03605 23.3434C9.86443 23.3434 10.5359 22.6719 10.5359 21.8435C10.5284 14.3885 16.5659 8.3389 24.0209 8.33149C30.4743 8.32503 36.0296 12.8873 37.278 19.2188C37.4012 19.851 37.9143 20.3339 38.5528 20.4187C42.6532 21.0026 45.5037 24.7999 44.9199 28.9002C44.3956 32.5821 41.252 35.3235 37.5329 35.342H31.5336V38.3417H37.5329C43.3313 38.3242 48.0175 33.6094 47.9999 27.8111C47.9853 22.9844 44.6815 18.7895 39.9927 17.6441Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M22.97 23.7785L16.9707 29.7778L19.0855 31.8926L22.5351 28.4579V42.8414H25.5348V28.4579L28.9694 31.8926L31.0842 29.7778L25.0848 23.7785C24.4998 23.1969 23.5551 23.1969 22.97 23.7785Z"
                                                fill="black"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_26333_33515">
                                                <rect
                                                    width="48"
                                                    height="48"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className=" text-dark-2 mb-4 text-2xl font-bold leading-[1.3]">
                                    Choose a file or drag & drop it here.
                                </p>
                                <p className="text-dark-2 text-sm font-semibold mb-4">OR</p>
                                <label className="cursor-pointer text-main underline hover:text-main-2 transition-color duration-200 text-sm font-semibold leading-[1.4]">
                                    Choose File
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileUpload}
                                    />
                                </label>
                                {formData.uploadedFile && (
                                    <p className="mt-4 text-green-600">
                                        File selected:{" "}
                                        {formData.uploadedFile.name}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Button group */}
                        <div className="flex justify-end gap-5 mt-8 pb-8">
                            <Link
                                to="/"
                                className="flex justify-center py-[14px] px-6 rounded-lg bg-danger text-white text-base font-black transition-colors duration-200 hover:bg-danger/15 hover:text-danger"
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
                        {/* Button group */}
                        {/* Purchase Information  form */}
                    </form>
                    {/* Form - end */}
                </div>
            </div>
        </section>
    );
}
