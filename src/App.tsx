import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Field from './components/Field';

const pages = [
  'Page 1',
  'Page 2',
  'Page 3',
  'Page 4',
  'Page 5',
  'Page 6',
];

export default function App() {
  const [checkbox, setCheckbox] = useState(Array(pages.length).fill(false));
  const [globalCheckbox, setGlobalCheckbox] = useState(false);

  const toggleCheckbox = (idx: number) => {
    const newCheckboxValues = [...checkbox];
    newCheckboxValues[idx] = !newCheckboxValues[idx];
    setCheckbox(newCheckboxValues);

    const shouldGlobalChecked = newCheckboxValues.every((val) => val);
    setGlobalCheckbox(shouldGlobalChecked);
  }

  const toggleGlobalCheckbox = () => {
    setGlobalCheckbox(!globalCheckbox);
    setCheckbox(Array(pages.length).fill(!globalCheckbox));
  }

  return (
    <div className="card">

      <Field checked={globalCheckbox} toggleCheckbox={toggleGlobalCheckbox}>All pages</Field>

      <hr className="line" />

      <div className="scrollable-container">
        {
          pages.map((val, idx) => (
            <Field
              key={idx}
              checked={checkbox[idx]}
              toggleCheckbox={() => toggleCheckbox(idx)}
            >
              {val}
            </Field>
          ))
        }
      </div>

      <hr className="line" />

      <Button>Done</Button>

    </div>
  )
}
