import React,{Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

//class TodoList extends Component{}
const TodoList = ({todos, onTodoClick}) => {
    if (todos.length === 0)
        return <div>Add todos</div>
    return (
        <ul>
            {todos.map(todo=>(
                <Todo key={todo.id} text={todo.text} completed={todo.completed} onClick={()=>onTodoClick(todo.id)}/>
            ))}
        </ul>
    )
}

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

//export default TodoList;