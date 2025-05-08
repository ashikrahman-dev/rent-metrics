import { Link } from "react-router-dom";

import { useOutletContext } from 'react-router-dom';
import { propertyList as defaultPropertyList } from "../../utils/data/data";
import { useFormData } from "../../context/PropertyContext";

export default function PropertySummary() {

  const { searchTerm } = useOutletContext();
  // const { properties, searchQuery, filteredProperties: contextFilteredProperties } = useFormData();
  const { properties, searchQuery, filteredProperties: contextFilteredProperties, selectProperty } = useFormData();


  // Changed the order here - put user properties first, then default properties
  const allProperties = [...properties, ...defaultPropertyList];
  const filteredProperties = searchTerm 
  ? allProperties.filter((property) =>
      (property.name || property.property_name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (property.address || property.property_address || "").toLowerCase().includes(searchTerm.toLowerCase())
    )
  : searchQuery
  ? contextFilteredProperties
  : allProperties;

  const handlePropertySelect = (property) => {
    selectProperty(property);
  };

  return (
    <div className="flex-1 p-8 bg-dark-10 min-h-[calc(100%-70px)] h-full overflow-y-auto py-20 relative z-0">
      {/* Heading & Button */}
      <div className="flex gap-6 justify-between items-center mb-[34px] pt-8">
        <h2 className="text-[28px] font-bold text-dark-1 leading-[1.35]">
          Portfolio Summary
        </h2>
        <Link
          to="/add-new-properties"
          className="text-base px-[18px] py-[9px] bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-main-shade hover:text-main cursor-pointer inline-flex items-center gap-[10px] group col-auto"
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
          Add Property
        </Link>
      </div>


      {/* Property Cards */}
      <div className="grid grid-cols-12 gap-6">
                {/* Display all properties */}
                {filteredProperties.map((property, index) => (
                    <div
                        key={property.id || `new-property-${index}`}
                        className="col-span-3 p-2 rounded-lg bg-white property-card relative"
                        onClick={() => handlePropertySelect(property)}
                    >
                        {(property.image || property.imageURL) ? (
                            <img
                                src={property.image || property.imageURL}
                                alt="Property Image"
                                className="max-w-full rounded-lg pb-2 relative z-30"
                            />
                        ) : (
                            <div className="bg-gray-200 h-40 rounded-lg mb-2 flex items-center justify-center">
                                <p className="text-gray-500">No image</p>
                            </div>
                        )}
                        <div className="p-4 relative z-30">
                            <h4 className="text-dark-1 font-bold leading-[1.3] mb-2">
                                {property.name || property.property_name}
                            </h4>
                            <p className="text-base text-dark-2 leading-[1.3]">
                                {property.address || property.property_address}
                            </p>
                            <div className="flex justify-between gap-6 mt-6 mb-8">
                                <div>
                                    <p className="text-dark-3 leading-[1.3] mb-1">Occupancy</p>
                                    <h6 className="font-bold text-dark-1">
                                        {property.occupancy || "--"}%
                                    </h6>
                                </div>
                                <div>
                                    <p className="text-dark-3 leading-[1.3] mb-1">T-12</p>
                                    <h6 className="font-bold text-dark-1">{property.revenue || property.trailingNOI || "--"}</h6>
                                </div>
                                <div>
                                    <p className="text-dark-3 leading-[1.3] mb-1">CoC Yield</p>
                                    <h6 className="font-bold text-success bg-success-light rounded-sm py-[3px] px-4 text-center text-xs capitalize">
                                        {property.status || "New"}
                                    </h6>
                                </div>
                            </div>
                            <Link
                                to={`/dashboard/${property.id || `property-${index}`}`}
                                className="py-[9px] px-6 border border-main rounded-lg font-black flex justify-center text-main w-full leading-[1.5] transition-colors duration-300 hover:bg-main hover:text-white"
                                onClick={() => handlePropertySelect(property)}
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
}