import React, { useState,Routes, Route, useNavigate } from "react";
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom";

import "./Tradeedit.css";

function Tradeedit() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Trade Fail", "Mis-Booking", "System Failure", "Other"];
 

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="app">
      <div className="checkList">
        <div className="title">What's the Issue?</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* {`Items checked are: ${checkedItems}`} */}
        <Button variant="primary"   >
          Save
        </Button>

       
      </div>
    </div>

  );
}
export default Tradeedit

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


