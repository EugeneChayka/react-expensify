import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref('expenses').set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({})
    const id = expenses[2].id

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        note: 'test notes here',
        amount: 213
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'test notes here',
            amount: 213
        }
    })
});

test('should edit expenses from firebase', (done) => {
    const store = createMockStore({})
    const id = expenses[0].id
    const updates = {
        note: 'firebase updated here'
        // amount: 10.50
    }

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        // const { amount, description, note, createdAt, id } = expenses[0]
        // expect(snapshot.val()).toEqual({
        //     amount,
        //     description,
        //     note,
        //     createdAt,
        //     ...updates
        // })
        expect(snapshot.val().note).toBe(updates.note)
        done()
    })
})

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
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({})

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})
