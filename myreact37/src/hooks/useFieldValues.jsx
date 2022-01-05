// 커스텀 훅

// 커스텀 훅을 만드는 이유: 재사용을 위해

import { useState } from "react";

function useFieldValues(initialFieldValues) {
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  const clearFieldValues = () => setFieldValues(initialFieldValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("changed", name, value);

    // 함수 안 쓰고, 값 지정
    // setFieldValues({
    //   ...fieldValues,
    //   [name]: value, // 계산된 문법
    // });

    // 함수 O
    setFieldValues((prevFieldValues) => {
      return { ...prevFieldValues, [name]: value };
    });
  };

  //TODO
  return [fieldValues, handleChange, clearFieldValues];
}

export default useFieldValues;
