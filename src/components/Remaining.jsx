import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const Remaining = () => {
  const {budget, expenses} = useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)

  const alertType = totalExpenses > budget ? 'danger' : 'remain'

  return (
    <>
        <div className={`alert ${alertType}`}>
            <div className="details">
                <h2>Remaining money: </h2>
                <div className="budget-amount">${budget - totalExpenses}</div>
            </div>
        </div>
    </>
  )
}

