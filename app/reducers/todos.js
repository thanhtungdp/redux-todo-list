import constants from '../constants';
import update from 'react-addons-update';
import "babel-polyfill";

const todos = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_TO_DO:
            return update(state, {
                $push: [{
                    id: action.id,
                    text: action.text,
                    completed: false
                }]
            })
        case constants.TOGGLE_TODO:
            var indexTodo = state.findIndex((todo) => todo.id == action.id);
            return update(state, {
                [indexTodo]: {
                    completed: {$apply: (value) => !value}
                }
            })
        default:
            return state;
    }
}

export default todos;