import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../../context/PropertyContext";

export default function PropertyInformation() {
  const { updateFormData } = useFormData();  // Correct hook and function
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    property_name: "",
    property_address: "",
    city: "",
    state: "",
    zip_code: "",
    website_url: "",
    number_of_units: "",
    year_built: "",
    sf_gba: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formData);  // Updated to use the correct function
    navigate("/dealpoint");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <h4 className="text-dark-1 text-2xl font-bold mb-6">
        Property Information
      </h4>
      <div className="grid grid-cols-12 gap-6">
        {[
          { label: "Property Name", name: "property_name", type: "text" },
          { label: "Property Address", name: "property_address", type: "text" },
          { label: "City", name: "city", type: "text" },
          { label: "State", name: "state", type: "text" },
          { label: "Zip", name: "zip_code", type: "number" },
          { label: "Website", name: "website_url", type: "url" },
          { label: "Number of Units", name: "number_of_units", type: "number" },
          { label: "Year Built", name: "year_built", type: "number" },
          { label: "SF GBA", name: "sf_gba", type: "number" },
        ].map(({ label, name, type }) => (
          <div key={name} className="col-span-4">
            <label htmlFor={name} className="block text-base font-bold text-dark-1">
              {label}
            </label>
            <div className="mt-3">
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                placeholder={label}
                className="block w-full h-13 py-[17px] px-4 rounded-lg text-sm bg-dark-7 text-dark-1 placeholder:text-dark-2 border-0 focus:outline-0"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-5 mt-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="py-[14px] px-6 rounded-lg bg-danger text-white font-black hover:bg-danger/15 hover:text-danger"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-[14px] px-6 rounded-lg bg-success text-white font-black hover:bg-success/15 hover:text-success"
        >
          Add Property
        </button>
      </div>
    </form>
  );
}
