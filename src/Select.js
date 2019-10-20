import React, { useState } from 'react';
import './Select.css';

function Select(props) {
  const { placeholder, listItems } = props;

  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const hideClassName = !open ? "hide" : "";

  const selectAction = (option) => {
    setSelectedOption(option);
    setOpen(false);
  }

  return (
    <div className="Select-container">
      <p className="Select-title" onClick={() => setOpen(!open)}>{selectedOption}</p>
      <ul className={`Select-menu ${hideClassName}`}>
        {
          listItems.map((item) => (
            <li className="Select-menuitem" onClick={() => selectAction(item)}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Select;
