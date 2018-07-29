import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//add Expense - water bill
store.dispatch(addExpense({description: 'Water Bill'}));
store.dispatch(addExpense({description: 'Gas Bill'}));
store.dispatch(setTextFilter('wat'));

setTimeout(()=>{
    store.dispatch(setTextFilter('rent'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);