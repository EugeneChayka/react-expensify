import {createStore, combineReducers} from 'redux';

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

console.log('redux-expensify');