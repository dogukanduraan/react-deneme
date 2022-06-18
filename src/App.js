import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useReducer } from "react";
import reducer from "./TodoReducer"


function App() {

  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });
  
	const updateTodos = (todo) => {
    console.log("test" + todo)
    dispatch({ type: "ADD_TODO", todo: todo });
  };
  return (
    <div className="h-screen bg-red-200">
      
      
      <TodoForm updateTodos={updateTodos}></TodoForm>
      <TodoList todos={state.todos}></TodoList>
      

    </div>
  );
}

export default App;