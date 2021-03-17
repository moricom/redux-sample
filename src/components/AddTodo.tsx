import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux-modules/todo-list";

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");

  const handleOnClick = () => {
    if (input !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={input} />
      <button onClick={handleOnClick}>add</button>
    </div>
  );
};

export default AddTodo;
