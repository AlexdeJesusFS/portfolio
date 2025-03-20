import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
