import { useState } from "react";

function useFieldValues(initial) {
  const [fieldValues, setFieldValuse] = useState(initial);

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFieldValuse((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };
  return [fieldValues, handleChange];
}

export default useFieldValues;
