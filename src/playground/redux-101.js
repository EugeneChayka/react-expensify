import {createStore} from 'redux';

//Action generators

// const add = (data) => {
//     return data.a + data.b;
// };
//
// const add = ({a,b}) => {
//     return a + b;
// };
//
// console.log(add({a:1, b:2}));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
    // incrementBy: incrementBy
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Redusers
// 1. Pure functions
// 2. Never change state or action. Immutability

const countReduser = (state = {count: 0}, action) =>
{
    switch (action.type){
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                // count: state.count - decrementBy
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReduser);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// unsubscribe();


// store.dispatch({
//     type: 'INCREMENTt'
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({ count:101 }));

