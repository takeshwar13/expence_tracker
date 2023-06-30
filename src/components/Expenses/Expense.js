import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <div className="expense">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        {props.expense.map((items) => (
          <ExpenseItem
            title={items.title}
            amount={items.amount}
            date={items.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Expense;
