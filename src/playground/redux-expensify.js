import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

console.log('redux-expensify');

// ADD_EXPENSE

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// Remove expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expanse) => {
                if (expanse.id === action.id) {
                    return {
                        ...expanse,
                        ...action.updates
                    };
                }
                else {
                    return expanse;
                }
            });
        default:
            return state;
    }
};

// set Text Filter

const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Filters Reducer

const filtersReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

// Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

const demoState = {
    expenses: [{
        id: 'qq',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'JEn',
//     age: 24
// };

// console.log({
//     age: 39,
//     ...user,
//     location: 'Kiev',
//     age: 27
// })