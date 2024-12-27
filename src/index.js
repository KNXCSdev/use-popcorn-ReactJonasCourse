import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import "./index.css";
import App from "./App";
import Challenge from "./challenge";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      {/* <StarRating color="blue" maxRating={10} onSetRating={setMovieRating}></StarRating> */}
      <p>This movie was rated {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Test></Test> */}
    {/* <StarRating maxRating={5} />
     */}
    <App></App>

    {/* <Challenge></Challenge> */}
  </React.StrictMode>
);
