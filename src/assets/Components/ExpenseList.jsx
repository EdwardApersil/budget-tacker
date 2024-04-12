import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 14, name: 'car service', cost: 50 },
        { id: 15, name: 'car service', cost: 100 },
        { id: 16, name: 'car service', cost: 150 }
    ];

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

export default ExpenseList;

