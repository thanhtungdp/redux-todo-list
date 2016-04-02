import AddTodoForm from '../components/AddTodoForm';

import {connect} from 'react-redux';
import actions from '../actions';

const mapDispatchToProps = (dispatch)=>{
    return{
        onSubmit: (text)=>{
            dispatch(actions.addTodo(text));
            dispatch(actions.setVisibilityFilter('SHOW_ALL'));
        }
    }
}

let AddToDo = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddToDo;