
import PropTypes from 'prop-types';
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

ExpenseItem.propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
};

export default ExpenseItem;