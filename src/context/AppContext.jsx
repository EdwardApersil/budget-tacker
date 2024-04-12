import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const AppReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
}

const initialState = {
    budget: 3000,
    expenses: [
        { id: 12, name: 'Shopping', cost: 100 },
        { id: 12, name: 'Holiday', cost: 400 },
    ]
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

