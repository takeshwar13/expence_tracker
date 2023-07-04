import React, { useState } from "react";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expense">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
};

export default Expense;
