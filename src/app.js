import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { startSetExpenses } from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

const appRoot = document.getElementById('app');

ReactDOM.render(<p>Loading...</p>, appRoot);

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, appRoot);
})