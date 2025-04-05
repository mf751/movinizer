import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/nav";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
