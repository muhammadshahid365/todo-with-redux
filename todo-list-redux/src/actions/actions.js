import * as types from './types'

let lastId = 0;
export const addTodo = title =>({
    type: types.TODO_ADDED,
    payload: {
        id: ++lastId,
        text: title,
        completed: false
    }
});

export const changeCompleted = id => ({
    type: types.CHANGE_COMPLETED,
    payload: id
})