import React from "react";
import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";

const App: React.FC = () => (
  <div>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
