function TodoForm({ handleChange }) {
  return (
    <div>
      <h2>Todo Form</h2>
      <input
        className="border-2 border-gray-200"
        type="text"
        onChange={handleChange}
        name="content"
      />

      <select onChange={handleChange} name="color">
        <option>blue</option>
        <option>red</option>
        <option>yellow</option>
      </select>
    </div>
  );
}

export default TodoForm;
