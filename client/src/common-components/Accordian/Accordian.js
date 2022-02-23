import React, { useState } from 'react';
import './Accordian.scss'


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content" contentEditable='true' dangerouslySetInnerHTML={{ __html: content }}></div>}
    </div>
  );
};

export default Accordion;