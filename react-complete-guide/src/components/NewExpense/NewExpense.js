import React from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    // This function comes from App.js and is being called via props
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      {/* This "on..." prop is passing our Expense Data up from a child to a parent element */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense