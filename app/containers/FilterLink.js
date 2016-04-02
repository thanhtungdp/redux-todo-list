import {connect} from 'react-redux';
import actions from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps)=> {
    return {
        onClick: (e)=> {
            e.preventDefault();
            console.log(ownProps.filter);
            dispatch(actions.setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;