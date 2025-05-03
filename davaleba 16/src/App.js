import React, { useState } from "react";

import './styles.css'; 




function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodo([...todo, { id: Date.now(), text: task }]);
    setTask("");
  };

 
  const handleStartProgress = (id) => {
    const taskToMove = todo.find((t) => t.id === id);
    setTodo(todo.filter((t) => t.id !== id));
    setInProgress([...inProgress, taskToMove]);
  };

  
  const handleComplete = (id) => {
    const completedTask = inProgress.find((t) => t.id === id);
    setInProgress(inProgress.filter((t) => t.id !== id));
    setDone([...done, completedTask]);
  };

  
  const handleDelete = (id) => {
    setDone(done.filter((t) => t.id !== id));
  };

  
  const handleReturnToProgress = (id) => {
    const returnedTask = done.find((t) => t.id === id);
    setDone(done.filter((t) => t.id !== id));
    setInProgress([...inProgress, returnedTask]);
  };

  
  const handleReturnToTodo = (id) => {
    const returnedTask = inProgress.find((t) => t.id === id);
    setInProgress(inProgress.filter((t) => t.id !== id));
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
          placeholder="ახალი დავალება..."
          style={{ padding: 8, width: 300 }}
        />
        <button type="submit" style={{ padding: 8, marginLeft: 10 }}>
          დამატება
        </button>
      </form>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <h2>შესასრულებელი</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {todo.map((t) => (
              <li key={t.id} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
                <span style={{ flex: 1 }}>{t.text}</span>
                <button onClick={() => handleStartProgress(t.id)} style={{ marginLeft: 10 }}>
                  დაწყება
                </button>
              </li>
            ))}
            {todo.length === 0 && <li>დავალებები არ არის</li>}
          </ul>
        </div>
        
        <div style={{ flex: 1 }}>
          <h2>მიმდინარე</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {inProgress.map((t) => (
              <li key={t.id} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
                <span style={{ flex: 1 }}>{t.text}</span>
                <button onClick={() => handleComplete(t.id)} style={{ marginLeft: 10 }}>
                  დასრულება
                </button>
                <button onClick={() => handleReturnToTodo(t.id)} style={{ marginLeft: 10 }}>
                  დაბრუნება
                </button>
              </li>
            ))}
            {inProgress.length === 0 && <li>დავალებები არ არის</li>}
          </ul>
        </div>
      
        <div style={{ flex: 1 }}>
          <h2>შესრულებული</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {done.map((t) => (
              <li key={t.id} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
                <span style={{ flex: 1, textDecoration: "line-through" }}>{t.text}</span>
                <button onClick={() => handleReturnToProgress(t.id)} style={{ marginLeft: 10 }}>
                  დაბრუნება
                </button>
                <button onClick={() => handleDelete(t.id)} style={{ marginLeft: 10 }}>
                  წაშლა
                </button>
              </li>
            ))}
            {done.length === 0 && <li>დავალებები არ არის</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}



export default App;
