import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new todo"
          style={{ padding: '0.5rem', width: '70%' }}
        />
        <button type="submit" style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
          Add
        </button>
      </form>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              id={`todo-${todo.id}`}
            />
            <label
              htmlFor={`todo-${todo.id}`}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginLeft: '0.5rem',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '1rem', color: 'red', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
