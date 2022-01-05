import { useState } from "react";

function useFieldValues(initialFieldValue) {
  const [fieldValues, setFieldValuse] = useState(initialFieldValue);

  const clearFieldValues = () => setFieldValuse(initialFieldValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValuse((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  return [fieldValues, handleChange, clearFieldValues];
}

export default useFieldValues;
