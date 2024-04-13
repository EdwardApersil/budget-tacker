import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItems';

export const SearchExpense = () => {
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
            <ul>
                {expenses
                    .filter((expense) => expense.name.toLowerCase().includes(searchWord))
                    .map((filteredExpense) => (
                        // <li key={filteredExpense.id}>{filteredExpense.name}</li>
                        <ExpenseItem key={filteredExpense.id} cost={filteredExpense.cost} name={filteredExpense.name}/>
                    ))}
            </ul>
        </div>
    )
}

// export default SearchExpense;
