import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/AddExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "exp1",
    date: new Date(2023, 1, 6),
    title: "Bike Insurance",
    amount: 2000,
  },
  {
    id: "exp2",
    date: new Date(2020, 1, 10),
    title: "Groceries",
    amount: 1700,
  },
  {
    id: "exp3",
    date: new Date(2021, 1, 16),
    title: "Cricket Kit",
    amount: 16000,
  },
  {
    id: "exp4",
    date: new Date(2019, 1, 17),
    title: "House Rent",
    amount: 12000,
  },
];

function App() {
  const [items, setItems] = useState(DUMMY_EXPENSES);

  const expenseHandler = (addExpense) => {
    setItems((prevExpenses) => {
      return [addExpense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onExpenseSave={expenseHandler} />
      <Expense expense={items} />
    </div>
  );
}

export default App;
