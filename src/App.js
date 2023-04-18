import "./App.css";
import { Routes, Route, useFormAction } from "react-router-dom";
import Header from "./components/Header";
import AllReviews from "./components/AllReviews";
import LogIn from "./components/Login";

function App() {
  const user = "daniel";
  return (
    <div className="App">
      <div className="apphead">
        <Header />
      </div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<AllReviews user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
