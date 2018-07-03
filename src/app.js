import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component!
    </div>
);

const AddDashboardPage = () => (
    <div>
        This is from my AddExpense component!
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my EditExpensePage component!
    </div>
);

const NotFoundPage = () => (
    <div>
        404!
    </div>
);



const routesold = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddDashboardPage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route component={NotFoundPage}/>
        </div>
    </BrowserRouter>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddDashboardPage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/edit/test" component={EditExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

const appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);
