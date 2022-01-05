import useFieldValues from "hooks/useFieldValues";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

const INITIAL_STATE = [
  { content: "파이썬 익히기", color: "blue" },
  { content: "리액트 익히기", color: "red" },
  { content: "마리랑 놀기", color: "red" },
];

function TodoList() {
  const [todoList, setTodeList] = useState(INITIAL_STATE);

  const [fieldValues, handleChange, clearFieldValues] = useFieldValues({
    content: "",
    color: "red",
  });

  const removeTode = (todoIndex) => {
    setTodeList((prevTodeList) =>
      prevTodeList.filter((_, index) => index !== todoIndex)
    );
  };

  const todo = { ...fieldValues };

  const appendTodo = () => {
    console.log("새로운 todo를 추가하겠습니다.");

    // setter에 값 지정 방식
    // setTodeList({ ...todoList, todo });
    // clearFieldValues();

    // setter에 함수 지정 방식
    setTodeList((prevTodeList) => [...prevTodeList, todo]);
    clearFieldValues();
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>

      <TodoForm
        fieldValues={fieldValues}
        handleChange={handleChange}
        handleSubmit={appendTodo}
      />
      <hr />
      {JSON.stringify(fieldValues)}

      <button
        className="bg-red-500 text-gray-100 cursor-pointer"
        onClick={() => clearFieldValues()}
      >
        clear
      </button>

      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTode(index)} />
      ))}
    </div>
  );
}

export default TodoList;
