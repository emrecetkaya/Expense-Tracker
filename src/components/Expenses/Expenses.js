import React, { useState } from 'react'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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




  return (

    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>

  )
}

export default Expenses