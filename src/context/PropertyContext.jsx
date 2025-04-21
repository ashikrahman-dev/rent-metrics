// context/PropertyContext.jsx

import { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export function FormDataProvider({ children }) {
  const [formData, setFormData] = useState({
    property_name: "",
    property_address: "",
    uploadedFile: null,
    imageURL: "", // 👉 Add this line to store Blob URL
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleFileUpload = (file) => {
    const fileURL = URL.createObjectURL(file); // 👈 Generate blob URL
    updateFormData({ uploadedFile: file, imageURL: fileURL });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData, handleFileUpload }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormDataContext);
}
