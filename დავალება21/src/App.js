import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';

function App() {
  return (
    <div style={{ maxWidth: 400, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Redux Todo App</h1>
      <AddTodo />
      <TodoList />
      <DoneList />
    </div>
  );
}

export default App;
