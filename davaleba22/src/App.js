import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import { toggleDarkMode } from './store';

function App() {
  const darkMode = useSelector(state => state.darkMode.dark);
  const dispatch = useDispatch();

  const appStyle = {
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    color: darkMode ? '#f5f5f5' : '#121212',
    minHeight: '100vh',
    padding: 20,
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyle}>
      <button
        onClick={() => dispatch(toggleDarkMode())}
        style={{
          marginBottom: 20,
          padding: '8px 16px',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#333' : '#ddd',
          color: darkMode ? '#f5f5f5' : '#121212',
          border: 'none',
          borderRadius: 4
        }}
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <h1>Redux Todo App</h1>
      <AddTodo />
      <TodoList />
      <DoneList />
    </div>
  );
}

export default App;
