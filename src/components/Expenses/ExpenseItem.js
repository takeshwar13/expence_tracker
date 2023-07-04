import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("Clicked!!");
  };
  return (
    <li>
      <div className="expense-item ">
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description ">
          <h2>{title}</h2>
          <div className="expense-item__price ">{props.amount} ₹</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
