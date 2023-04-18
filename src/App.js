import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllReviews from "./components/AllReviews";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<AllReviews />} />
        <Route path="/Reviews" element={<AllReviews />} />
      </Routes>
    </div>
  );
}

export default App;
