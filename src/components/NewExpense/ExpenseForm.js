import React from "react";

const ExpenseForm = () => {
  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="31-12-2023" />
        </div>
        <div>
          <label>amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
