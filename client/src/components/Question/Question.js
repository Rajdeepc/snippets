import React from "react";
import './Question.scss'


export default function Question({ item, selectedIndex, handleClick }) {
  return (
    <div
      className={`question-container ${item._id === selectedIndex ? "active" : ""}`}
      onClick={() => handleClick(item)}
    >
      <div className="question-item item-logo"></div>
      <div className="question-item item-desc">
        <h2>{item.questionTitle}</h2>
        <p>{item.questionDescription}</p>
      </div>
      <div className="question-item item-author"></div>
    </div>
  );
}
