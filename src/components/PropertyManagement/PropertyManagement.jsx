import { Link } from "react-router-dom";
import BrandSelection from "./BrandSelection";

export default function PropertyManagement() {
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
            {/* Form - start */}
            <form>
                {/* Property Information form */}
                <div className="bg-white p-6 rounded-lg mb-8">
                    <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                    Management Company:
                    </h4>
                    <div className="grid grid-cols-12 gap-6 ">
                        {/* Property Name */}
                        <div className="col-span-12">
                            <label
                                htmlFor="property_name"
                                className="block text-base leading-[1.40] font-bold text-dark-1 text-left"
                            >
                                Property Management Company:
                            </label>
                            <div className="mt-3">
                                <input
                                    id="property_name"
                                    name="property_name"
                                    type="text"
                                    autoComplete="property_name"
                                    placeholder="RPM Management "
                                    className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm font-medium leading-[1.3] placeholder:text-dark-2 bg-dark-7 border-0 text-dark-1 focus:outline-0"
                                />
                            </div>
                        </div>

                    
                    </div>
                </div>
                {/* Property Information form */}


                <div className="bg-white p-6 rounded-lg mb-8">
                    <h4 className="text-dark-1 text-2xl font-bold leading-[1.3] mb-6">
                    Which Property Management Software do they use?
                    </h4>
                    <div className="grid grid-cols-12 gap-6 ">
                        {/* Property Name */}
                        <div className="col-span-12">
                           <BrandSelection />
                        </div>
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
                        to=""
                        className="flex justify-center py-[14px] px-6 rounded-lg bg-success text-white text-base font-black transition-colors duration-200 hover:bg-success/15 hover:text-success"
                    >
                        Apply
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
