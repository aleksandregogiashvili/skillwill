import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodo([...todo, { id: Date.now(), text: task }]);
    setTask("");
  };

  const handleComplete = (id) => {
    const completedTask = todo.find((t) => t.id === id);
    setTodo(todo.filter((t) => t.id !== id));
    setDone([...done, completedTask]);
  };

  const handleDelete = (id) => {
    setDone(done.filter((t) => t.id !== id));
  };

  const handleReturn = (id) => {
    const returnedTask = done.find((t) => t.id === id);
    setDone(done.filter((t) => t.id !== id));
    setTodo([...todo, returnedTask]);
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>To Do List</h1>
      <form onSubmit={handleAddTask} style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          style={{ padding: 8, width: 300 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 10 }}>
          Add a task
        </button>
      </form>
      <div style={{ display: "flex", gap: 40 }}>
        <div style={{ flex: 1 }}>
          <h2>Tasks to do</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {todo.map((t) => (
              <li key={t.id} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
                <span style={{ flex: 1 }}>{t.text}</span>
                <button onClick={() => handleComplete(t.id)} style={{ marginLeft: 10 }}>
                  Task finished
                </button>
              </li>
            ))}
            {todo.length === 0 && <li>No tasks added</li>}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Tasks to do</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {done.map((t) => (
              <li key={t.id} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
                <span style={{ flex: 1, textDecoration: "line-through" }}>{t.text}</span>
                <button onClick={() => handleReturn(t.id)} style={{ marginLeft: 10 }}>
                  Task Uncomplete
                </button>
                <button onClick={() => handleDelete(t.id)} style={{ marginLeft: 10 }}>
                  Delete
                </button>
              </li>
            ))}
            {done.length === 0 && <li>No tasks added</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;