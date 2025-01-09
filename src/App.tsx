import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz" element={<h1>Kambaz</h1>} />
          <Route path="/Project" element={<h1>Kambaz</h1>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App
