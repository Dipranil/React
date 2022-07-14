import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setitle] = useState(props.title);
  // let head = props.title;

  function clickHandler() {
    console.log(title);
    setitle("updated");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}> Click</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
