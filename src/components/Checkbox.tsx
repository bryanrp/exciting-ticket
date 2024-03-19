import "./Checkbox.css";

export default function Checkbox({ checked, toggleCheckbox }: { checked: boolean, toggleCheckbox: () => void }) {
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheckbox}
        className="checkbox-input" />
      <span className="checkbox-checkmark">
        <Checkmark />
      </span>
    </label>
  )
}

function Checkmark() {
  return <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1" strokeLinecap="round" />
  </svg>
}