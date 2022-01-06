import { useState } from "react";

function useFieldValues(initial) {
  const [fieldValues, setFieldValues] = useState(initial);

  const clearFieldValues = () => setFieldValues(initial);

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };
  return [fieldValues, handleChange, clearFieldValues, setFieldValues];
}

export default useFieldValues;
