import React, { useState, useCallback } from "react";
import Task from "./task";
import CompletedTask from "./completedTask";

const App = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodo((prevTodo) => [...prevTodo, { id: Date.now(), text: task }]);
    setTask("");
  };

  const handleComplete = useCallback((id) => {
    setTodo((prevTodo) => {
      const completedTask = prevTodo.find((t) => t.id === id);
      if (completedTask) {
        if (!done.some(task => task.id === completedTask.id)) {
          setDone((prevDone) => [...prevDone, completedTask]);
        }
      }
      return prevTodo.filter((t) => t.id !== id);
    });
  }, [done]);

  const handleDelete = useCallback((id) => {
    setDone((prevDone) => prevDone.filter((t) => t.id !== id));
  }, []);

  const handleReturn = useCallback((id) => {
    setDone((prevDone) => {
      const returnedTask = prevDone.find((t) => t.id === id);
      if (returnedTask) {
        setTodo((prevTodo) => [...prevTodo, returnedTask]);
      }
      return prevDone.filter((t) => t.id !== id);
    });
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>To Do List</h1>
      <form onSubmit={handleAddTask} style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task..."
          style={{ padding: 8, width: 300 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 10 }}>
          Add
        </button>
      </form>
      <div style={{ display: "flex", gap: 40 }}>
        <div style={{ flex: 1 }}>
          <h2>To Do</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {todo.map((t) => (
              <Task key={t.id} task={t} onComplete={() => handleComplete(t.id)} />
            ))}
            {todo.length === 0 && <li>No tasks</li>}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Completed</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {done.map((t) => (
              <CompletedTask
                key={t.id}
                task={t}
                onDelete={() => handleDelete(t.id)}
                onReturn={() => handleReturn(t.id)}
              />
            ))}
            {done.length === 0 && <li>No completed tasks</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;