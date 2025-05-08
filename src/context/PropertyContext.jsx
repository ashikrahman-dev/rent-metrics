// context/PropertyContext.jsx

import { createContext, useContext, useState } from "react";

// 1️⃣ Named export of the context (use this if you ever want to use useContext(PropertyContext))
export const PropertyContext = createContext();

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    property_name: "",
    property_address: "",
    uploadedFile: null,
    imageURL: "",
  });

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const updateFormData = (newData) => {
    setFormData((prev) => {
      // Merge the new data with existing data
      const updated = { ...prev, ...newData };
      return updated;
    });
  };

  const handleFileUpload = (file) => {
    const fileURL = URL.createObjectURL(file);
    updateFormData({ uploadedFile: file, imageURL: fileURL });
  };

  const submitProperty = () => {
    setProperties((prev) => [...prev, formData]);
    setFormData({
      property_name: "",
      property_address: "",
      uploadedFile: null,
      imageURL: "",
    });
  };

  const selectProperty = (property) => {
    setSelectedProperty(property);
  };

  const filteredProperties = properties.filter((property) =>
    property?.property_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property?.property_address?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PropertyContext.Provider
      value={{
        formData,
        setFormData,
        updateFormData,  
        searchQuery,
        setSearchQuery,
        filteredProperties,
        properties,
        submitProperty,
        handleFileUpload,
        selectedProperty,
        selectProperty
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

// 2️⃣ Custom hook for easier usage
export function useFormData() {
  return useContext(PropertyContext);
}










