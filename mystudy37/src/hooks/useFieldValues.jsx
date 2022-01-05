import { useState } from "react";

function useFieldValues() {
  const [fieldValues, setFieldValuse] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValuse((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  return [fieldValues, handleChange];
}

export default useFieldValues;
