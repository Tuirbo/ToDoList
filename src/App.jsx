import React, { useState } from 'react';
import "./App.css";
import "./reset.css";

export default function App() {
  const [addList, setAddList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const num = 1;

  const buttonClicked = () => {
    if (inputValue.trim() !== "") {
      setAddList([...addList, inputValue]);
      setInputValue("");
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const deleteItem = (index) => {
    const updatedList = [...addList];
    updatedList.splice(index, 1);
    setAddList(updatedList);
  }

  return (
    <div className="mainblock">
      <div className="List">
        <div className="DoList">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button className="Add" onClick={buttonClicked}>
            add
          </button>
        </div>
        <ul>
          {addList.map((item, index) => (
            <li className="item" key={index}>
              <p className="index">
                {index+1}
              </p>
              <p>{item}</p>
              <button onClick={() => deleteItem(index)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}