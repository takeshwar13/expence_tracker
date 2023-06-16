import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <ExpenseItem
        date={new Date(2023, 1, 6)}
        title="Bike Insurance"
        amount={2000}
      />
      <ExpenseItem
        date={new Date(2023, 1, 10)}
        title="Groceries"
        amount={1700}
      />
      <ExpenseItem
        date={new Date(2023, 1, 16)}
        title="Cricket Kit"
        amount={16000}
      />
      <ExpenseItem
        date={new Date(2023, 1, 17)}
        title="House Rent"
        amount={12000}
      />
    </div>
  );
}

export default App;
