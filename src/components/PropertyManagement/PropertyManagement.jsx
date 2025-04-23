// Modified version of PropertyManagement.jsx with context integration
import { Link, useNavigate } from "react-router-dom";
import BrandSelection from "./BrandSelection";
import { useFormData } from "../../context/PropertyContext";
import { useState } from "react";

export default function PropertyManagement() {
    const { updateFormData, submitProperty } = useFormData();
    const navigate = useNavigate();
    const [managementData, setManagementData] = useState({
        management_company: "",
        software: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setManagementData(prev => ({...prev, [name]: value}));
    };

    const handleSoftwareSelection = (software) => {
        setManagementData(prev => ({...prev, software}));
    };

    const handleSubmit = () => {
        // Update context with final step data
        updateFormData(managementData);
        // Submit the entire property data to the property list
        submitProperty();
        // Navigate to property summary
        navigate("/dashboard/property-summary");
    };

    return (
        <section className="bg-dark-8 pt-10 px-[30px] min-h-svh">
            <div className="container mx-auto">
                <div className="flex gap-6 items-center">
                    <div className="w-full">
                        <h2 className="text-[32px] text-dark-1 font-bold leading-[1.4] mb-2">
                        Property Management Setup
                        </h2>
                    </div>
                </div>

                <div className="">
                    <form>
                        <div className="bg-white p-6 rounded-lg mb-8">
                            <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                            Management Company:
                            </h4>
                            <div className="grid grid-cols-12 gap-6 ">
                                <div className="col-span-12">
                                    <label
                                        htmlFor="management_company"
                                        className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                                    >
                                        Property Management Company:
                                    </label>
                                    <div className="mt-3">
                                        <input
                                            id="management_company"
                                            name="management_company"
                                            type="text"
                                            value={managementData.management_company}
                                            onChange={handleChange}
                                            placeholder="RPM Management"
                                            className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg mb-8">
                            <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                            Which Property Management Software do they use?
                            </h4>
                            <div className="grid grid-cols-12 gap-6 ">
                                <div className="col-span-12">
                                   <BrandSelection onSelect={handleSoftwareSelection} />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-5 mt-8 pb-8">
                            <Link
                                to="/dealpoint"
                                className="flex justify-center py-[14px] px-6 rounded-lg bg-danger text-white text-base font-black transition-colors duration-200 hover:bg-danger/15 hover:text-danger"
                            >
                                Cancel
                            </Link>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="flex justify-center py-[14px] px-6 rounded-lg bg-success text-white text-base font-black transition-colors duration-200 hover:bg-success/15 hover:text-success"
                            >
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}