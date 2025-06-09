import React, {
  useState,
  useTransition,
  useDeferredValue,
  Suspense,
  useId,
} from 'react';
import './index.css';


const HeavyComponent = React.lazy(() => import('./HeavyComponent'));


const dataList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);


function EmailForm() {
  const id = useId();

  return (
    <form className="email-form">
      <label htmlFor={`${id}-email`}>Email:</label>
      <input id={`${id}-email`} type="email" name="email" />
    </form>
  );
}

export default function App() {
  const [showHeavy, setShowHeavy] = useState(false);
  const [filter, setFilter] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredFilter = useDeferredValue(filter);

  const filteredData = dataList.filter(item =>
    item.toLowerCase().includes(deferredFilter.toLowerCase())
  );

  return (
    <div className="container">
      <button onClick={() => setShowHeavy(true)} className="btn">
        Load Heavy Component
      </button>

      {showHeavy && (
        <Suspense fallback={<div>Loading heavy component...</div>}>
          <HeavyComponent />
        </Suspense>
      )}

      <input
        type="text"
        placeholder="Search data..."
        value={filter}
        onChange={(e) =>
          startTransition(() => setFilter(e.target.value))
        }
        className="input"
      />

      {isPending && <p>Filtering...</p>}

      <ul className="data-list">
        {filteredData.slice(0, 100).map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Form 1</h3>
      <EmailForm />
      <h3>Form 2</h3>
      <EmailForm />
    </div>
  );
}
