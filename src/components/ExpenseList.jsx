import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItems';

export  const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [searchWord, setSearchWord] = useState('');

    const handleSearch = (e) => {
        setSearchWord(e.target.value.toLowerCase());
    }

    return (
        <div>
            <form className="search" onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={handleSearch} placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
            <div className="card">
                {expenses
                .filter((expense) => expense.name.toLowerCase().includes(searchWord))
                .map((expense) => (
                    <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost}  time={expense.time} category={expense.category} priorty={expense.priority}/>
                ))}
            </div>
        </div>
    );
};

// export default ExpenseList;
