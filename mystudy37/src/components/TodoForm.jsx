function TodoForm({ fieldValues, handleChange, handleSubmit }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="border-2 border-red-500 p-3">
      <h2 className="text-lg underline">Todo Form</h2>
      <input
        className="border-2 border-gray-200"
        type="text"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="content"
        value={fieldValues.content}
      />

      <select onChange={handleChange} name="color" value={fieldValues.color}>
        <option>blue</option>
        <option>red</option>
        <option>yellow</option>
      </select>

      <button
        className="bg-red-500 text-gray-100 cursor-pointer"
        onClick={() => handleSubmit()}
      >
        저장하기
      </button>
    </div>
  );
}

export default TodoForm;
