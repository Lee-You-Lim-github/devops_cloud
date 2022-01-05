// import { useState } from "react";

function TodoForm({ handleChange }) {
  //   const [fieldValues, setFieldValues] = useState({});

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     // console.log("changed", name, value);

  //     // 함수 안 쓰고, 값 지정
  //     setFieldValues({
  //       ...fieldValues,
  //       [name]: value, // 계산된 문법
  //     });
  //   };

  return (
    <div>
      <h2>Todo Form</h2>

      <input
        type="text"
        className="border-2 border-gray-400"
        onChange={handleChange}
        name="content"
      />

      <select onChange={handleChange} name="color">
        <option>Amber</option>
        <option>Orange</option>
        <option>Yellow</option>
      </select>
      <hr />
      {/* {JSON.stringify(fieldValues)} */}
    </div>
  );
}

export default TodoForm;
