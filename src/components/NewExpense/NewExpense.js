import React from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

const NewExpense = (params) => {

  const onSavedExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    params.onCreateData(expenseData);
  }


  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={onSavedExpenseData} />
    </div>
  )
}

export default NewExpense