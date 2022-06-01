import React from "react";
import "./ExpenseItem.scss";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <Card className="expense-item__price">${props.amount}</Card>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
