import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItems';

export  const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <div>
            <ul className="list">
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </div>
    );
};

// export default ExpenseList;
