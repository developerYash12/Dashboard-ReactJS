import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
