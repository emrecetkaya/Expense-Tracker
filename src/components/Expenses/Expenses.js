import React, { useState } from 'react'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('Expenses.js');
    console.log(selectedYear);
  }

  const filteredExpenses = props.expensesArr.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  var expensesContent = <p>No content found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    })
  }

  return (

    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
      {expensesContent}
    </Card>

  )
}

export default Expenses