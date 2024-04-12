import { AppContext } from "../context/AppContext"
import { useContext } from "react"


export const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <>
        <div className="budget">
            <div>
                <h2>Budget</h2>
                <div className="budget-amount">${budget}</div>
            </div>
            <button>Edit</button>
        </div>
    </>
  )
}
