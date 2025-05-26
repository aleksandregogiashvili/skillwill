import React from 'react';
import { useSelector } from 'react-redux';

function DoneList() {
  const doneTodos = useSelector(state => state.todos.filter(todo => todo.done));

  if (doneTodos.length === 0) {
    return <p>No done todos yet.</p>;
  }

  return (
    <div>
      <h2>Done Todos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {doneTodos.map(todo => (
          <li key={todo.id} style={{ padding: '4px 0', textDecoration: 'line-through' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoneList;
