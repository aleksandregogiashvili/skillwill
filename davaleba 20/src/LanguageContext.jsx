import React, { createContext, useState, useContext } from 'react';

const translations = {
  ka: {
    todoAppTitle: 'Todo აპი',
    languageLabel: 'ენა:',
    todoListTitle: 'To Do List',
    enterNewTaskPlaceholder: 'შეიყვანეთ ახალი დავალება...',
    addButton: 'დამატება',
    backlog: 'დასაწყებია',
    inProgress: 'სრულდება',
    done: 'დამთავრება',
    start: 'დაწყება',
    backlogBtn: 'დაბრუნება',
    complete: 'დასრულებულია',
    inProgressBtn: 'სრულდება',
    delete: 'წაშლა',
  },
  en: {
    todoAppTitle: 'Todo App',
    languageLabel: 'Language:',
    todoListTitle: 'To Do List',
    enterNewTaskPlaceholder: 'Enter a new task...',
    addButton: 'Add',
    backlog: 'Backlog',
    inProgress: 'In Progress',
    done: 'Done',
    start: 'Start',
    backlogBtn: 'Backlog',
    complete: 'Complete',
    inProgressBtn: 'In progress',
    delete: 'Delete',
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ka');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
