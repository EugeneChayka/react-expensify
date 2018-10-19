import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

test('should set up remove expense action object', ()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up edit expense action object',()=>{
    const action = editExpense('123abc', {
        note: 'test notes here',
        amount: 213
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note: 'test notes here',
            amount: 213
        }
    })
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: '3000',
        note: 'This one is better',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(1)
        done()
    })
})

test('should add expense with defaults to database and store', () => {

})

// test('should setup add expense action object with default values', ()=>{
//     const expenseData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     };
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             ...expenseData
//         }
//     })
// });