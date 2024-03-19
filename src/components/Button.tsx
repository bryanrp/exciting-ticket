import { ReactNode } from "react";
import "./Button.css";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <div className="button">
      {children}
    </div>
  )
}