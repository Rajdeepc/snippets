import React from "react";

export default function Snippets({ item, selectedIndex, handleClick }) {
  return (
    <div
      className={`grid-container ${item._id === selectedIndex ? "active" : ""}`}
      onClick={() => handleClick(item._id)}
    >
      <div className="grid-item item-logo"></div>
      <div className="grid-item item-desc">
        <h2>{item.questionTitle}</h2>
        <p>{item.questionDescription}</p>
      </div>
      <div className="grid-item item-author"></div>
    </div>
  );
}
