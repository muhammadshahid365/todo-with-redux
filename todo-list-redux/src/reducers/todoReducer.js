import * as types from '../actions/types'

export default (state = [], action) => {
    switch (action.type){
        case types.TODO_ADDED:
            return [
                action.payload,
                ...state
            ]
        case types.CHANGE_COMPLETED:
            return state.map(todo => {
                if(action.payload === todo.id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        default:
            return state
    }
}