import React from "react";
import "./Components/Cards/Cards.css";

function Cards({ components}) {
  // TODO: Add error handling if components is empty or not an array

  return (
    <div className="layout">
      {components.map((Component, index) => (
        // Here, each item in `components` should be a React component or data describing it.
        <Component key={index} />
      ))}
    </div>
  );
}

export default Cards;

