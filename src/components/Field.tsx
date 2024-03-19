import { ReactNode } from "react";
import Checkbox from "./Checkbox";
import "./Field.css";

export default function Field(
  { checked, toggleCheckbox, children }: { checked: boolean, toggleCheckbox: () => void, children: ReactNode }
) {
  return (
    <div className="field-container">
      {children}
      <Checkbox checked={checked} toggleCheckbox={toggleCheckbox} />
    </div>
  )
}