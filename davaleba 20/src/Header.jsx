import React from 'react';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>{t.todoAppTitle}</h1>
      <div>
        <label htmlFor="language-select" style={{ marginRight: '8px' }}>
          {t.languageLabel}
        </label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
          aria-label="Select language"
          style={selectStyle}
        >
          <option value="ka">ქართული</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
}

const headerStyle = {
  position: 'sticky',
  top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#3498db',
  color: 'white',
  fontWeight: 'bold',
  zIndex: 1000,
  
};

const selectStyle = {
  fontSize: '1rem',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  border: 'none',
};
