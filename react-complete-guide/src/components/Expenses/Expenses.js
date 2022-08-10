import React, {useState} from "react";
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList'

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter( (expense) => {
    // REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses