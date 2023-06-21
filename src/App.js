import Expense from "./components/Expenses/Expense";

function App() {
  const items = [
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
      <Expense expense={items} />
    </div>
  );
}

export default App;
