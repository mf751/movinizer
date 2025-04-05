import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/nav";

function App() {
  return (
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
  );
}

export default App;
