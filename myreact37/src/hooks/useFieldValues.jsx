import { useState } from "react";

function useFieldValues() {
  const [fieldValues, setFieldValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("changed", name, value);

    // 함수 안 쓰고, 값 지정
    setFieldValues({
      ...fieldValues,
      [name]: value, // 계산된 문법
    });
  };

  //TODO
  return [fieldValues, handleChange];
}

export default useFieldValues;
