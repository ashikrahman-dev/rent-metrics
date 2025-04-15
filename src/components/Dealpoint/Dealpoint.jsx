import { Link } from "react-router-dom";

export default function Dealpoint() {
    return (
        <section className="bg-dark-8 pt-10 px-[30px] min-h-svh">
            <div className="container mx-auto">
                <div className="flex gap-6 items-center">
                    <div className="w-full">
                        <h2 className="text-[32px] text-dark-1 font-bold leading-[1.4] mb-2">
                        Deal Points 
                        </h2>
                        <p className="text-dark-2 text-base leading-[1.3] mb-8">
                        Search for an existing property or add a new one to the system
                        </p>
                    </div>
                </div>

                <div className="">
            {/* Form - start */}
            <form>
                {/* Property Information form */}
                <div className="bg-white p-6 rounded-lg mb-8">
                    <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                    Deal Points
                    </h4>
                    <div className="grid grid-cols-12 gap-6 ">
                        {/* Property Name */}
                        <div className="col-span-6">
                            <label
                                htmlFor="property_name"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Purchase Price
                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_name"
                                    name="property_name"
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
                                htmlFor="property_address"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                               Date of Purchase

                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_address"
                                    name="property_address"
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
                                htmlFor="city"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Trailing 12 Month NOI
                            </label>
                            <div className="mt-3">
                                <input
                                    id="city"
                                    name="city"
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
                                htmlFor="state"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Debt Amount at Purchase
                            </label>
                            <div className="mt-3">
                                <input
                                    id="state"
                                    name="state"
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
                                htmlFor="zip_code"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Equity Amount at Purchase
                            </label>
                            <div className="mt-3">
                                <input
                                    id="zip_code"
                                    name="zip_code"
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
                                htmlFor="property_name"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                              Loan Amount
                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_name"
                                    name="property_name"
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
                                htmlFor="property_address"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                              Interest Rate

                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_address"
                                    name="property_address"
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
                                htmlFor="city"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                               Term (Years)
                            </label>
                            <div className="mt-3">
                                <input
                                    id="city"
                                    name="city"
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
                                htmlFor="state"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                
Interest Only Period (Months)
                            </label>
                            <div className="mt-3">
                                <input
                                    id="state"
                                    name="state"
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
                                htmlFor="zip_code"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Mortgage Company 
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
                        </div>
                        <div className="col-span-12">
                            <label
                                htmlFor="zip_code"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            > </label>
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
                        </div>
                    </div>
                </div>

         
                {/* Button group */}
                <div className="flex justify-end gap-5 mt-8">
                    <Link
                        to="/"
                        className="flex justify-center py-[14px] px-6 rounded-lg bg-danger text-white text-base font-black transition-colors duration-200 hover:bg-danger/15 hover:text-danger"
                    >
                        Cancel
                    </Link>
                    <Link
                        to=""
                        className="flex justify-center py-[14px] px-6 rounded-lg bg-success text-white text-base font-black transition-colors duration-200 hover:bg-success/15 hover:text-success"
                    >
                        Add Property
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
