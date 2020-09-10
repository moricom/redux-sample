import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todosModule from './modules/todosModule';

// rootReducer の準備
const rootReducer = combineReducers({
  todo: todosModule.reducer,
});

// setup 関数を用意してエクスポートする。
export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware()];

  // only development
  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });

  return store;
};
