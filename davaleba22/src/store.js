import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const addTodoAsync = createAsyncThunk(
  'todos/addTodoAsync',
  async (text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: Date.now(), text, done: false });
      }, 500);
    });
  }
);

export const deleteTodoAsync = createAsyncThunk(
  'todos/deleteTodoAsync',
  async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 500);
    });
  }
);

export const toggleDoneAsync = createAsyncThunk(
  'todos/toggleDoneAsync',
  async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 500);
    });
  }
);


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
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
      })
      .addCase(toggleDoneAsync.fulfilled, (state, action) => {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) {
          todo.done = !todo.done;
        }
      });
  }
});

export const { addTodo, deleteTodo, toggleDone } = todoSlice.actions;


const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: { dark: false },
  reducers: {
    toggleDarkMode: (state) => {
      state.dark = !state.dark;
    }
  }
});

export const { toggleDarkMode } = darkModeSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    darkMode: darkModeSlice.reducer
  }
});

export default store;
