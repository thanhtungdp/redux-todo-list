import {connect} from 'react-redux';
import {dispatch} from 'redux';
import actions from '../actions';
import TodoList from '../components/TodoList';

const getVisibleList = (state, filter)=> {
    switch (filter) {
        case 'SHOW_ALL':
            return state;
        case 'SHOW_COMPLETED':
            return state.filter(todo => todo.completed);
        case 'SHOW_ACTIVE':
            return state.filter(todo => !todo.completed);
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleList(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(actions.toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;