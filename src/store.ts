import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoReducer from "redux-modules/todo-list";

// rootReducer の準備
export const rootReducer = combineReducers({
  todoList: todoReducer,
});

// setup 関数を用意してエクスポートする。
export const setupStore = () => {
  const middleware = [...getDefaultMiddleware()];

  // only development
  if (process.env.NODE_ENV === `development`) {
    middleware.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  return store;
};

export const store = setupStore();
export default store;

export type RootState = ReturnType<typeof store.getState>;
