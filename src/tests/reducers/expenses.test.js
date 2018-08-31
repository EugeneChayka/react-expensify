import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const expense = {
        id: '1',
        description: 'Not a Gum',
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expense.id,
        updates: expense
    }
    const state = expensesReducer(expenses, action)
    expect(state[0]).toEqual({...expenses[0], ...expense})
})

test('should not edit an expense if id is not found', () => {
    const expense = {
        id: '-1',
        description: 'Not even close a Gum',
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expense.id,
        updates: expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})