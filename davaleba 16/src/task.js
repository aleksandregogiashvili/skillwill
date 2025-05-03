import React from "react";

const Task = React.memo(({ task, onComplete }) => {
  return (
    <li style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
      <span style={{ flex: 1 }}>{task.text}</span>
      <button onClick={onComplete}>Complete</button>
    </li>
  );
});

export default Task;