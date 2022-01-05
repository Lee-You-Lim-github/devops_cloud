import useFieldValues from "hooks/useFieldValues";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const INITIAL_STATE = [
  { content: "파이썬 익히기", color: "blue" },
  { content: "리액트 익히기", color: "red" },
  { content: "장고 익히기", color: "yellow" },
];

function TodoList() {
  const [todoList, setTodoList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange, clearFieldValues] = useFieldValues({
    content: "",
    color: "red",
  });

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex)
    );
  };

  const appendTodo = () => {
    console.log("값 추가");

    const todo = { ...fieldValues };

    setTodoList((prevTodoList) => [...prevTodoList, todo]);

    clearFieldValues();
  };

  return (
    <div>
      <h2>Todo List</h2>

      <hr />
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
        삭제
      </button>

      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
