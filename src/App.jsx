import { Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Meooww</h2>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/t" element={<div>HIII</div>} />
      </Routes>
      ;
    </div>
  );
}

export default App;
