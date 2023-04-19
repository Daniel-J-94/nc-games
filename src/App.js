import "./App.css";
import { useState } from "react";
import { Routes, Route, useFormAction } from "react-router-dom";
import Header from "./components/Header";
import AllReviews from "./components/AllReviews";
import LogIn from "./components/Login";
import SingleReviewById from "./components/SingleReviewById";

function App() {
  const user = "daniel";

  const [isLightTheme, setIsLightTheme] = useState(true);
  const handleThemeClick = () => {
    // event.preventDefault;
    console.log("click!");
    setIsLightTheme(!isLightTheme);
  };

  return (
    <div className="App">
      <div className="apphead">
        <Header
          handleThemeClick={handleThemeClick}
          isLightTheme={isLightTheme}
        />
      </div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<AllReviews user={user} />} />
        <Route path="/reviews/:review_id" element={<SingleReviewById />} />
      </Routes>
    </div>
  );
}

export default App;
