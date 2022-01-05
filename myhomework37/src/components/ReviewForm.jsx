function ReviewForm({ fieldValues, handleChange }) {
  return (
    <div className="border-2 border-gray-200 p-3">
      <h1>Review Form</h1>
      <div>
        <select onChange={handleChange} name="score" value={fieldValues.score}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <textarea
          className="border-2 border-gray-200"
          type="text"
          name="text"
          value={fieldValues.tex}
          onChange={handleChange}
        ></textarea>

        <button className="bg-red-500 text-gray-100 cursor-pointer">
          저장하기
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
