import "./App.css";
import { useState } from "react";
import { Routes, Route, useFormAction } from "react-router-dom";
import Header from "./components/Header";
import AllReviews from "./components/AllReviews";
import LogIn from "./components/Login";
import SingleReviewById from "./components/SingleReviewById";
import CommentsByReviewId from "./components/CommentsByReviewId";

function App() {
  const user = "daniel";

  const [isLightTheme, setIsLightTheme] = useState(true);
  const handleThemeClick = () => {
    // event.preventDefault;
    console.log("click!");
    setIsLightTheme(!isLightTheme);
  };

  function themeoptions(lightoption, darkoption) {
    if (isLightTheme) {
      return lightoption;
    } else {
      return darkoption;
    }
  }

  return (
    <div className="App">
      <div className={themeoptions("apphead", "appheadDark")}>
        <Header
          handleThemeClick={handleThemeClick}
          isLightTheme={isLightTheme}
        />
      </div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/"
          element={<AllReviews user={user} isLightTheme={isLightTheme} />}
        />
        <Route path="/reviews/:review_id" element={<SingleReviewById />} />
        <Route
          path="/reviews/:review_id/comments"
          element={<CommentsByReviewId />}
        />
      </Routes>
    </div>
  );
}

export default App;
