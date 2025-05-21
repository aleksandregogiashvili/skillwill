import React, { useCallback, useMemo } from 'react';
import Header from './Header';
import { LanguageProvider, useLanguage } from './LanguageContext';

const Task = React.memo(function Task({ task, column, onComplete, onDelete, onMoveForward, onMoveBack }) {
  const { t } = useLanguage();

  const borderColors = {
    backlog: '#d35400',
    inprogress: '#f1c40f',
    done: '#27ae60',
  };
  const borderColor = borderColors[column] || '#3498db';

  return (
    <article
      className="task"
      aria-label={`${column} task: ${task.text}`}
      style={{ borderLeft: `6px solid ${borderColor}` }}
    >
      <div className="task-text">{task.text}</div>
      <div className="btn-group">
        {column === 'backlog' && (
          <button
            className="btn-move-forward"
            onClick={() => onMoveForward(task.id, 'inprogress')}
            aria-label={`${t.start} task: ${task.text}`}
          >
            {t.start}
          </button>
        )}
        {column === 'inprogress' && (
          <>
            <button
              className="btn-move-back"
              onClick={() => onMoveBack(task.id, 'backlog')}
              aria-label={`${t.backlogBtn} task: ${task.text}`}
            >
              {t.backlogBtn}
            </button>
            <button
              className="btn-move-forward"
              onClick={() => onMoveForward(task.id, 'done')}
              aria-label={`${t.complete} task: ${task.text}`}
            >
              {t.complete}
            </button>
          </>
        )}
        {column === 'done' && (
          <>
            <button
              className="btn-move-back"
              onClick={() => onMoveBack(task.id, 'inprogress')}
              aria-label={`${t.inProgressBtn} task: ${task.text}`}
            >
              {t.inProgressBtn}
            </button>
            <button
              className="btn-delete"
              onClick={() => onDelete(task.id)}
              aria-label={`${t.delete} task: ${task.text}`}
            >
              {t.delete}
            </button>
          </>
        )}
      </div>
    </article>
  );
});

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { t } = useLanguage();
  const [taskText, setTaskText] = React.useState('');
  const [backlogTasks, setBacklogTasks] = React.useState([]);
  const [inProgressTasks, setInProgressTasks] = React.useState([]);
  const [doneTasks, setDoneTasks] = React.useState([]);

  const handleAddTask = useCallback(() => {
    const trimmed = taskText.trim();
    if (!trimmed) return;
    setBacklogTasks(prev => [...prev, { id: Date.now(), text: trimmed }]);
    setTaskText('');
  }, [taskText]);

  const moveTask = useCallback((id, from, to) => {
    let taskToMove;

    if (from === 'backlog') {
      taskToMove = backlogTasks.find(t => t.id === id);
      if (!taskToMove) return;
      setBacklogTasks(prev => prev.filter(t => t.id !== id));
    } else if (from === 'inprogress') {
      taskToMove = inProgressTasks.find(t => t.id === id);
      if (!taskToMove) return;
      setInProgressTasks(prev => prev.filter(t => t.id !== id));
    } else if (from === 'done') {
      taskToMove = doneTasks.find(t => t.id === id);
      if (!taskToMove) return;
      setDoneTasks(prev => prev.filter(t => t.id !== id));
    }

    if (taskToMove) {
      if (to === 'backlog') {
        setBacklogTasks(prev => [...prev, taskToMove]);
      } else if (to === 'inprogress') {
        setInProgressTasks(prev => [...prev, taskToMove]);
      } else if (to === 'done') {
        setDoneTasks(prev => [...prev, taskToMove]);
      }
    }
  }, [backlogTasks, inProgressTasks, doneTasks]);

  const handleDeleteDoneTask = useCallback((id) => {
    setDoneTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleMoveForward = useCallback((id, to) => {
    if (to === 'inprogress') {
      moveTask(id, 'backlog', 'inprogress');
    } else if (to === 'done') {
      moveTask(id, 'inprogress', 'done');
    }
  }, [moveTask]);

  const handleMoveBack = useCallback((id, to) => {
    if (to === 'backlog') {
      moveTask(id, 'inprogress', 'backlog');
    } else if (to === 'inprogress') {
      moveTask(id, 'done', 'inprogress');
    }
  }, [moveTask]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }, [handleAddTask]);

  const renderedBacklogTasks = useMemo(() => {
    return backlogTasks.map(task => (
      <Task
        key={task.id}
        task={task}
        column="backlog"
        onMoveForward={handleMoveForward}
      />
    ));
  }, [backlogTasks, handleMoveForward]);

  const renderedInProgressTasks = useMemo(() => {
    return inProgressTasks.map(task => (
      <Task
        key={task.id}
        task={task}
        column="inprogress"
        onMoveForward={handleMoveForward}
        onMoveBack={handleMoveBack}
      />
    ));
  }, [inProgressTasks, handleMoveForward, handleMoveBack]);

  const renderedDoneTasks = useMemo(() => {
    return doneTasks.map(task => (
      <Task
        key={task.id}
        task={task}
        column="done"
        onDelete={handleDeleteDoneTask}
        onMoveBack={handleMoveBack}
      />
    ));
  }, [doneTasks, handleDeleteDoneTask, handleMoveBack]);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f0f2f5;
          color: #333;
        }
        .container {
          max-width: 1400px;
          margin: 2rem auto;
          padding: 1rem;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        h1 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }
        .input-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        input[type="text"] {
          flex: 1;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          border: 2px solid #3498db;
          border-radius: 6px;
          transition: border-color 0.3s;
        }
        input[type="text"]:focus {
          outline: none;
          border-color: #2980b9;
        }
        button.add-btn {
          background-color: #2980b9;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button.add-btn:hover:not(:disabled) {
          background-color: #1f6391;
        }
        button.add-btn:disabled {
          background-color: #7fb0d2;
          cursor: not-allowed;
        }
        .tasks-columns {
          display: flex;
          gap: 2rem;
          flex-wrap: nowrap;
          justify-content: center;
        }
        .column {
          background: #fff;
          border-radius: 10px;
          padding: 1rem;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          max-height: 500px;
          overflow-y: auto;
          border-top: 4px solid transparent;
        }
        .column.backlog {
          border-top-color: #d35400;
        }
        .column.inprogress {
          border-top-color: #f1c40f;
        }
        .column.done {
          border-top-color: #27ae60;
        }
        .column h2 {
          margin: 0 0 1rem 0;
          font-weight: 600;
          color: #333;
          user-select: none;
        }
        .task {
          background: #fff;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          margin-bottom: 0.75rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.3s;
          border-left: 6px solid transparent;
        }
        .task:hover {
          background-color: #f0f8ff;
        }
        .task-text {
          flex: 1;
          margin-right: 1rem;
          word-break: break-word;
          font-weight: 500;
          font-size: 1rem;
          color: #2c3e50;
          white-space: normal;
          overflow-wrap: break-word;
        }
        .btn-group button {
          background: #3498db;
          border: none;
          color: white;
          padding: 0.4rem 0.9rem;
          margin-left: 0.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: background-color 0.3s;
          user-select: none;
        }
        .btn-group button:hover {
          background-color: #2980b9;
        }
        .btn-move-forward {
          background-color: #27ae60;
        }
        .btn-move-forward:hover {
          background-color: #1e8449;
        }
        .btn-move-back {
          background-color: #f39c12;
        }
        .btn-move-back:hover {
          background-color: #b9770e;
        }
        .btn-delete {
          background-color: #c0392b;
          cursor: pointer;
        }
        .btn-delete:hover {
          background-color: #922b21;
        }
        @media (max-width: 850px){
          .tasks-columns {
            flex-direction: column;
            align-items: center;
          }
          .column {
            max-width: 100%;
            flex-basis: auto;
          }
        }
      `}</style>
      <Header />
      <div className="container" role="main">
        <h1>{t.todoListTitle}</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder={t.enterNewTaskPlaceholder}
            aria-label={t.enterNewTaskPlaceholder}
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="add-btn"
            onClick={handleAddTask}
            disabled={!taskText.trim()}
            aria-disabled={!taskText.trim()}
          >
            {t.addButton}
          </button>
        </div>
        <div className="tasks-columns">
          <section className="column backlog" aria-label={t.backlog}>
            <h2>{t.backlog}</h2>
            {renderedBacklogTasks}
          </section>
          <section className="column inprogress" aria-label={t.inProgress}>
            <h2>{t.inProgress}</h2>
            {renderedInProgressTasks}
          </section>
          <section className="column done" aria-label={t.done}>
            <h2>{t.done}</h2>
            {renderedDoneTasks}
          </section>
        </div>
      </div>
    </>
  );
}
