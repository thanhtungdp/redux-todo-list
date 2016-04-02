import constants from '../constants';

let nextTodoId = 0;
const actions = {
    addTodo: (text) => {
        return {
            type: constants.ADD_TO_DO,
            id: nextTodoId++,
            text
        }
    },

    setVisibilityFilter: (filter) => {
        return {
            type: constants.SET_VISIBILITY_FILTER,
            filter
        }
    },

    toggleTodo: (id)=> {
        return {
            type: constants.TOGGLE_TODO,
            id
        }
    }
}

export default actions;