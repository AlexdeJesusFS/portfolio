import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
