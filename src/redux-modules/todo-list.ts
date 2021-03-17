import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type SliceState = {
  nextTodoId: number;
  list: Todo[];
};

const initialState: SliceState = {
  nextTodoId: 0,
  list: [],
};

const todoListModule = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: state.nextTodoId++,
        text: action.payload,
        completed: false,
      };
      state.list = state.list.concat(todo);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.list = state.list.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      }));
    },
  },
});

export const { addTodo, toggleTodo } = todoListModule.actions;

export const todoList = (state: RootState) => state.todoList;

export default todoListModule.reducer;
