import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const Spent = () => {
  const {expenses} = useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total += item.cost)
  }, 0)
  return (
    <>
        <div className="spent">
            <div className="details">
                <h2>Spent so far: </h2>
                <div className="budget-amount">${totalExpenses}</div>
            </div>
        </div>
    </>
  )
}
