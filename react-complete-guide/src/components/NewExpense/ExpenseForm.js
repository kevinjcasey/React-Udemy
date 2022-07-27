import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  
  // Alternate option for grouping multiple states:
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    // OPTION 1 FOR UPDATING STATE:
    setEnteredTitle(event.target.value)

    // OPTION 2 FOR UPDATING STATE:
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // OPTION 3 FOR UPDATING STATE:
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  }
  
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    // Executed via NewExpense.js - passed from child to parent using props
    // This is how you pass functions between components and communicate up
    // Frequently used pattern and something you will use A LOT in React 
    props.onSaveExpenseData(expenseData)

    // This is known as TWO-WAY BINDING, which clears the form after submit
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={enteredTitle} 
            onChange={titleChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number" 
            min="0.01" 
            step="0.01"
            value={enteredAmount}  
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" 
            min="2019-01-01" 
            max="2022-12-31"
            value={enteredDate} 
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm

