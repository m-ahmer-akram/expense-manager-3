import React from "react";
import "./NewExpense.scss";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpesneData) => {
    const expenseData = {
      ...enteredExpesneData,
      id: "e" + Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};
