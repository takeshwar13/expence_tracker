import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "exp1",
      date: new Date(2023, 1, 6),
      title: "Bike Insurance",
      amount: 2000,
    },
    {
      id: "exp2",
      date: new Date(2023, 1, 10),
      title: "Groceries",
      amount: 1700,
    },
    {
      id: "exp3",
      date: new Date(2023, 1, 16),
      title: "Cricket Kit",
      amount: 16000,
    },
    {
      id: "exp4",
      date: new Date(2023, 1, 17),
      title: "House Rent",
      amount: 12000,
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
