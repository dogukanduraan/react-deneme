function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TODO":
      return {
        ...state,
        todo: action.value,
      };

    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((t, i) => i !== action.index)],
      };
  }
}

export default reducer