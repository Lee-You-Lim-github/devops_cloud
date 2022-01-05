import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const INITIAL_STATE = [
  { content: "파이썬 익히기" },
  { content: "리액트 익히기" },
  { content: "장고 익히기" },
];

function TodoList() {
  const [todoList, setTodoList] = useState(INITIAL_STATE);
  const [inputText, setInputText] = useState("");

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex)
    );
  };

  // const changedInputText = (e) => {
  //   setInputText(e.target.value);
  //   console.log(e.target.value);
  // };

  // const appendInputText = (e) => {
  //   if (e.key === "Enter") {
  //     setTodoList((prevTodoList) => {
  //       return [...prevTodoList, { content: inputText }];
  //     });
  //     setInputText("");
  //   }
  // };

  return (
    <div>
      <h2>Todo List</h2>

      <hr />
      <TodoForm />

      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
