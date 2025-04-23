import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/search-icon.svg";
import apartment from "../../assets/images/skyline-apartments-img.jpg";

export default function PropertiesNotFoundCard({ searchResults, searched }) {
    function selectProperty(propertyId) {
        console.log("Selected property ID:", propertyId);
        // You can add navigation or selection logic here
    }

    // If search hasn't been performed yet, don't show anything
    if (!searched) {
        return null;
    }

    // If there are search results, show them
    if (searchResults && searchResults.length > 0) {
        return (
            <div className="container mx-auto bg-white flex flex-col rounded-lg p-6 min-h-[424px] mt-8">
                <div className="text-left w-full">
                    <h5 className="text-dark-1 text-lg leading-[1.3] font-bold text-left">
                        Search Results ({searchResults.length} properties found)
                    </h5>

                    {/* Properties Cards */}
                    <div className="border-t border-dark-5 pt-6 mt-6">
                        {searchResults.map((property) => (
                            <div key={property.id} className="flex justify-between items-center gap-6 pb-6 mb-6 border-b border-dark-5">
                                {/* Left */}
                                <div className="flex gap-4 items-center">
                                    <div className="">
                                        <img
                                            src={property.image || apartment}
                                            alt={property.name}
                                            className="max-w-full rounded-sm"
                                        />
                                    </div>
                                    <div className="">
                                        <h5 className="text-lg text-dark-1 font-bold leading-[1.3] mb-2">
                                            {property.name}
                                        </h5>
                                        <p className="text-dark-2 leading-[1.3]">
                                            {property.address}
                                        </p>

                                        {/* Button group */}
                                        <div className="flex gap-2 mt-3">
                                            <button className="py-[6px] px-[9px] rounded-sm bg-main-shade text-[8px] text-main font-bold cursor-pointer transition-colors duration-200 hover:bg-main hover:text-white">
                                                {property.type || "Apartment Complex"}
                                            </button>
                                            <button className="py-[6px] px-[9px] rounded-sm bg-main-shade text-[8px] text-main font-bold cursor-pointer transition-colors duration-200 hover:bg-main hover:text-white">
                                                {property.status}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right */}
                                <button
                                    onClick={() => selectProperty(property.id)}
                                    className="text-base px-6 py-[14px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto"
                                >
                                    Select Property
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // If search was performed but no results, show the "No properties found" message
    return (
        <div className="container mx-auto bg-white flex flex-col rounded-lg p-6 min-h-[424px] mt-8">
            <div className="text-left w-full">
                <h5 className="text-dark-1 text-lg leading-[1.3] font-bold text-left">
                    Search Results (0 properties found)
                </h5>
            </div>
            
            <div className="flex flex-col justify-center items-center">
                <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="max-w-full mb-4"
                />
                <h4 className="text-dark-1 text-2xl leading-[1.3] font-bold mb-[10px]">
                    No properties found
                </h4>
                <p className="text-dark-2 text-base leading-[1.2]">
                    Get started by creating a new property
                </p>

                <Link
                    to="/add-new-properties"
                    className="text-base px-6 py-[14px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto mt-8 mb-12"
                >
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.827 10.6729H4.66675V9.32676H9.827V4.1665H11.1732V9.32676H16.3334V10.6729H11.1732V15.8332H9.827V10.6729Z"
                            fill="white"
                            className="transition-all duration-200 group-hover:fill-main"
                        />
                    </svg>
                    Add New Property
                </Link>
            </div>
        </div>
    );
}