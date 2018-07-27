import {createStore, combineReducers} from 'redux';

console.log('redux-expensify');

// Epenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>
{
    switch (action.type)
    {
        default:
            return state;
    }
};

// Filters Reducer

const filtersReducersDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducersDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
};

// Store

const store = createStore(
    combineReducers({
        expanses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

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