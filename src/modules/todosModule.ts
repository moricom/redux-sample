import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodosState = {
  nextTodoId: number;
  list: Todo[];
};

const todoInitialState: TodosState = {
  nextTodoId: 0,
  list: [],
};

const todosModules = createSlice({
  name: 'todos',
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: state.nextTodoId++,
        text: action.payload,
        completed: false,
      };
      return state.list.concat(todo);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      return state.list.map((todo) => {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed;
      });
    },
  },
});

export default todosModules;
