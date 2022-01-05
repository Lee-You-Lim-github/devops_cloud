import useFieldValues from "hooks/useFieldValues";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

const INITIAL_STATE = [
  { content: "파이썬 익히기" },
  { content: "리액트 익히기" },
  { content: "마리랑 놀기" },
  { content: "건강해지기" },
];

function TodoList() {
  // const [inputText, setInputText] = useState("");
  const [todoList, setTodeList] = useState(INITIAL_STATE);

  const [fieldValues, handleChange, clearFieldValues] = useFieldValues({
    content: "",
    color: "Orange",
  });

  const removeTode = (todoIndex) => {
    setTodeList((prevTodeList) =>
      prevTodeList.filter((_, index) => index !== todoIndex)
    );
  };

  // const changedInputText = (e) => {
  //   setInputText(e.target.value);
  // };

  // const appendInputText = (e) => {
  //   console.log("e.key:", e.key);
  //   if (e.key === "Enter") {
  //     // todeList 배열 끝에 inputText를 추가합니다.
  //     // inputText를 다시 비웁니다. => input 박스 UI가 비워보이진 않을 거예요.
  //     console.log("inputText:", inputText);

  //     // setTodoList에 함수 넘기는 것.
  //     // todoList 상탯값을 변경하는 것은 아닙니다. (배열의 push 사용 X)
  //     // setInputText((prevTodeList) => setTodeList(prevTodeList));
  //     setTodeList((prevTodeList) => {
  //       return [...prevTodeList, { content: inputText }];
  //     });
  //     setInputText("");
  //   }
  // };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>

      <TodoForm fieldValues={fieldValues} handleChange={handleChange} />
      <hr />
      {JSON.stringify(fieldValues)}

      <button
        className="bg-red-500 text-gray-100 cursor-pointer"
        onClick={() => clearFieldValues()}
      >
        clear
      </button>

      {/* <input
        type="text"
        value={inputText} // 중요!!
        onChange={changedInputText}
        onKeyPress={appendInputText}
      /> */}

      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTode(index)} />
      ))}
    </div>
  );
}

export default TodoList;
