import React from 'react';
import { MdCancel } from "react-icons/md";

const ExpenseItem = ({ name, cost }) => {
    return (
        <li>
            <div>{name}</div>
            <div className='cost'>
                <div className='money'>{cost}</div>
                <div><MdCancel /></div>
            </div>
        </li>
    );
};

export default ExpenseItem;
