import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

const NewExpense = (params) => {

  const [formStat, setFormStat] = useState(0);

  const onSavedExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    params.onCreateData(expenseData);
    setFormStat(0);
  }

  const handleFormStat = () => {
    setFormStat(1);
  }

  return (
    <div className="new-expense">
      {formStat === 0 && <button onClick={handleFormStat}>Add New Expense</button>}
      {formStat === 1 && <ExpenseForm handleFormStat={handleFormStat} onSubmitExpenseForm={onSavedExpenseData} />}


    </div>
  )
}

export default NewExpense