import "./Todo.css";

function Todo({ todo, onClick }) {
  return (
    <div
      className={`bg--200 
      hover:bg-blue-400 
      m-1 
      p-1 
      rounded-lg 
      text-lg
      border-red-700 border-2
      hover:border-blue-500 
      hover:scale-105 
      cursor-pointer`}
      style={{ backgroundColor: `${todo.color}` }}
      onClick={onClick}
    >
      {todo.color}
      {todo.content}
    </div>
  );
}

export default Todo;
