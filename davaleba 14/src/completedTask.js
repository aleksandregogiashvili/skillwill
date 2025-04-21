import React from "react";

const CompletedTask = React.memo(({ task, onDelete, onReturn }) => {
  return (
    <li style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
      <span style={{ flex: 1, textDecoration: "line-through" }}>{task.text}</span>
      <button onClick={onReturn}>Return</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
});

export default CompletedTask;