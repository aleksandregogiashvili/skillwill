import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, done: false });
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleDone: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    }
  }
});

export const { addTodo, deleteTodo, toggleDone } = todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});

export default store;
