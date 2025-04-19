import React, { useState, useCallback } from "react";


const Task = React.memo(({ task, onComplete }) => {
  console.log(`Rendering task: ${task.text}`);
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={onComplete}>დასრულება</button>
    </li>
  );
});


const CompletedTask = React.memo(({ task, onDelete, onReturn }) => {
  console.log(`Rendering completed task: ${task.text}`);
  return (
    <li>
      <span style={{ textDecoration: "line-through" }}>{task.text}</span>
      <button onClick={onReturn}>დაბრუნება</button>
      <button onClick={onDelete}>წაშლა</button>
    </li>
  );
});

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

  const handleComplete = useCallback((id) => {
    const completedTask = todo.find((t) => t.id === id);
    setTodo(todo.filter((t) => t.id !== id));
    setDone((prevDone) => [...prevDone, completedTask]);
  }, [todo]);

  const handleDelete = useCallback((id) => {
    setDone(done.filter((t) => t.id !== id));
  }, [done]);

  const handleReturn = useCallback((id) => {
    const returnedTask = done.find((t) => t.id === id);
    setDone(done.filter((t) => t.id !== id));
    setTodo((prevTodo) => [...prevTodo, returnedTask]);
  }, [done]);

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>To Do List</h1>
      <form onSubmit={handleAddTask} style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="ახალი დავალება..."
          style={{ padding: 8, width: 300 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 10 }}>
          დამატება
        </button>
      </form>
      <div style={{ display: "flex", gap: 40 }}>
        <div style={{ flex: 1 }}>
          <h2>შესასრულებელი</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {todo.map((t) => (
              <Task key={t.id} task={t} onComplete={() => handleComplete(t.id)} />
            ))}
            {todo.length === 0 && <li>დავალებები არ არის</li>}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>შესრულებული</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {done.map((t) => (
              <CompletedTask
                key={t.id}
                task={t}
                onDelete={() => handleDelete(t.id)}
                onReturn={() => handleReturn(t.id)}
              />
            ))}
            {done.length === 0 && <li>დავალებები არ არის</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;