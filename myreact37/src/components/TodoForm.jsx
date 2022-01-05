// import { useState } from "react";

function TodoForm({ fieldValues, handleChange, handleSubmit }) {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="border-2 border-red-500 p-3">
      <h2 className="text-lg underline">Todo Form</h2>

      <select onChange={handleChange} name="color" value={fieldValues.color}>
        <option>blue</option>
        <option>red</option>
        <option>yellow</option>
      </select>

      <input
        type="text"
        className="border-2 border-gray-400"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="content"
        value={fieldValues.content}
      />

      <button onClick={() => handleSubmit()}>저장</button>

      <hr />
    </div>
  );
}

export default TodoForm;
