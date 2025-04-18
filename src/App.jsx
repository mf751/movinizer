import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/nav";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-container">
            <Navbar />
            <Home />
          </div>
        }
      />
      <Route
        path="/favorites"
        element={
          <div className="main-container">
            <Navbar />
            <h2>Hi</h2>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
