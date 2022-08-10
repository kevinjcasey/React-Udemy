import React from "react"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

// This is an example of "stateless" component
const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title)

  // Typical naming convention for ‘onClick’ functions = ending the function with ‘…Handler’ for example ‘clickHandler’ - you won't see this everywhere, but this is what Max uses.
  // const clickHandler = () => {
  //   setTitle('Updated!')
  //   console.log(title)
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem