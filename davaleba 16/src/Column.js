const Column = ({ title, count, children }) => (
  <div className="column">
    <h2>{title} | {count}</h2>
    <div className="tasks">
      {children}
    </div>
    <button className="add-task">+</button>
  </div>
);