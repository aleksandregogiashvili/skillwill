import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleDone } from '../store';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 0',
            borderBottom: '1px solid #ccc',
            textDecoration: todo.done ? 'line-through' : 'none'
          }}
        >
          <span>{todo.text}</span>
          <div>
            <button
              onClick={() => dispatch(toggleDone(todo.id))}
              style={{ marginRight: 10 }}
            >
              {todo.done ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
