import residentialApartment from "../../assets/images/residentical-appartment-img.jpg";
import { useFormData } from "../../context/PropertyContext";

export default function PropertyDetails() {
    const { selectedProperty } = useFormData();

    // If no property is selected, show default or placeholder data
    if (!selectedProperty) {
        return null;
    }

    return (
        <div className="bg-white p-6 rounded-lg">
            <h3 className="text-[22px] dark-1 font-bold leading-[1.4] mb-6">
                Property Details
            </h3>
            <div className="flex gap-6">
                <div className="">
                    <div>
                    <p className="text-dark-3 font-medium leading-[1.3]">
                        Address
                    </p>
                    <p className="text-dark-2 font-bold leading-[1.3] mb-4">
                        {selectedProperty.address || selectedProperty.property_address}
                    </p>
                    </div>
                  <div>
                  <p className="text-dark-3 font-medium leading-[1.3]">
                        Property Type
                    </p>
                    <p className="text-dark-2 font-bold leading-[1.3] mb-4">
                        {selectedProperty.type || "Residential Apartment"}
                    </p>
                  </div>
                   <div>
                   <p className="text-dark-3 font-medium leading-[1.3]">
                        Total Units
                    </p>
                    <p className="text-dark-2 font-bold leading-[1.3] mb-4">
                        {selectedProperty.number_of_units || selectedProperty.units || "150"}
                    </p>
                   </div>
                  <div>
                  <p className="text-dark-3 font-medium leading-[1.3]">
                        Year Built
                    </p>
                    <p className="text-dark-2 font-bold leading-[1.3] mb-4">
                        {selectedProperty.year_built || "2018"}
                    </p>
                  </div>
                  <div>
                    <p className="text-dark-3 font-medium leading-[1.3]">
                        Last Renovation
                    </p>
                    <p className="text-dark-2 font-bold leading-[1.3] mb-4">
                        {selectedProperty.last_renovation || "2022"}
                    </p>
                  </div>
                </div>
                <div className="">
                    <img
                        src={selectedProperty.image || selectedProperty.imageURL || residentialApartment}
                        alt={selectedProperty.name || selectedProperty.property_name || "Property Image"}
                        className="max-w-full rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
