import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoList, toggleTodo } from "redux-modules/todo-list";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = (props) => {
  const dispatch = useDispatch();
  const { list } = useSelector(todoList);

  const handleOnClick = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {list.map((todo) => (
        <li
          key={todo.id}
          onClick={() => {
            handleOnClick(todo.id);
          }}
          style={{
            textDecoration: `${todo.completed ? "line-through" : "none"}`,
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
