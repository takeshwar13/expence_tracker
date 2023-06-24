import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!");
  };
  return (
    <div className="expense-item ">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">{props.amount} ₹</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
