import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input.trim()));
      setInput('');
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add todo"
        style={{ padding: 8, width: '70%', marginRight: 10 }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 16px' }}>Add</button>
    </div>
  );
}

export default AddTodo;
