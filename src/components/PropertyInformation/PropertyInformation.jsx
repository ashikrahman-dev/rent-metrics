import { Link } from "react-router-dom";

export default function PropertyInformation() {
    return (
        <div className="bg-white p-6 rounded-lg">
            <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                Property Information
            </h4>

            {/* Form - start */}
            <form>
                <div className="">
                    <div className="grid grid-cols-12 gap-6 ">
                        {/* Property Name */}
                        <div className="col-span-4">
                            <label
                                htmlFor="property_name"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Property Name
                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_name"
                                    name="property_name"
                                    type="text"
                                    autoComplete="property_name"
                                    placeholder="Property Name"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Property Address */}
                        <div className="col-span-4">
                            <label
                                htmlFor="property_address"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Property Address
                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_address"
                                    name="property_address"
                                    type="text"
                                    autoComplete="property_address"
                                    placeholder="Property Address"
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
                                City
                            </label>
                            <div className="mt-3">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="city"
                                    placeholder="City"
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
                                State
                            </label>
                            <div className="mt-3">
                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    autoComplete="state"
                                    placeholder="State"
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
                                Zip
                            </label>
                            <div className="mt-3">
                                <input
                                    id="zip_code"
                                    name="zip_code"
                                    type="number"
                                    autoComplete="zip_code"
                                    placeholder="Zip"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Website */}
                        <div className="col-span-4">
                            <label
                                htmlFor="website_url"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Website
                            </label>
                            <div className="mt-3">
                                <input
                                    id="website_url"
                                    name="website_url"
                                    type="url"
                                    pattern="https://.*"
                                    autoComplete="website_url"
                                    placeholder="https://"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Number of units  */}
                        <div className="col-span-4">
                            <label
                                htmlFor="number_of_units"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Number of units 
                            </label>
                            <div className="mt-3">
                                <input
                                    id="number_of_units"
                                    name="number_of_units"
                                    type="number"
                                    autoComplete="number_of_units"
                                    placeholder="Number"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-span-4">
                            <label
                                htmlFor="email"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Email
                            </label>
                            <div className="mt-3">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Email"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="col-span-4">
                            <label
                                htmlFor="password"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Password
                            </label>
                            <div className="mt-3">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    placeholder="Password"
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>

                            {/* Checkbox & Forgot Password */}
                            <div className="flex justify-between gap-5 text-left mt-[10px]">
                                <div className="flex gap-2 cursor-pointer">
                                    <div className="flex h-6 shrink-0 items-center">
                                        <div className="group grid size-4 grid-cols-1 cursor-pointer">
                                            <input
                                                defaultChecked
                                                id="keep-me-sign-in"
                                                name="keep-me-sign-in"
                                                type="checkbox"
                                                aria-describedby="comments-description"
                                                className="cursor-pointer col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-main checked:bg-main indeterminate:border-main indeterminate:bg-main focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                            />
                                            <svg
                                                fill="none"
                                                viewBox="0 0 14 14"
                                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                            >
                                                <path
                                                    d="M3 8L6 11L11 3.5"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-checked:opacity-100"
                                                />
                                                <path
                                                    d="M3 7H11"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-sm/6">
                                        <label
                                            htmlFor="keep-me-sign-in"
                                            className="font-medium text-dark-2 leading-[1.3] cursor-pointer"
                                        >
                                            Keep me Sign in
                                        </label>
                                    </div>
                                </div>
                                <div className="">
                                    <Link
                                        to="/forgot-password"
                                        className="text-danger text-sm leading-[1.3]"
                                    >
                                        Forgot Password ?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button group */}
                <div className="grid gap-5 mt-8">
                    <Link
                        to="/dashboard"
                        className="flex justify-center py-[14px] px-6 rounded-lg bg-main text-white text-base font-black transition-colors duration-200 hover:bg-main-shade hover:text-main"
                    >
                        Sign In
                    </Link>
                </div>
                {/* Button group */}
            </form>
            {/* Form - end */}
        </div>
    );
}
