import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHanlder = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onExpenseSave(expenseData);
    setIsEditing(false);
  };
  const clickHandler = () => {
    setIsEditing(true);
  };
  const onStopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={clickHandler}>Add New Expense </button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHanlder}
          onCancle={onStopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
