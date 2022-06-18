import { memo } from "react";
import React from "react";
import { useState } from "react";

function TodoForm({ updateTodos }) {
  const [todo, setTodo] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    updateTodos(todo);
    setTodo ("")
  };

  const updateTodo = (input) => {
    setTodo(input);
  };
  return (
    <div>
      <form
        className="p-5 flex gap-x-4 justify-center items-center border-b bg-red-800"
        onSubmit={(e) => submitHandle(e)}
      >
        <input
          className="p-3 rounded-md"
          type="text"
          value={todo}
          placeholder="Bir Todo Ekleyin."
          onChange={(e) => updateTodo(e.target.value)}
        />
        <button disabled={!todo} className="bg-yellow-600 disabled:bg-yellow-100 disabled:text-black p-3 rounded-md text-white" >
          Ekle
        </button>
      </form>
    </div>
  );
}

export default memo(TodoForm);
