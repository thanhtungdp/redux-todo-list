import React,{Component} from 'react';
import FilterLink from '../containers/FilterLink';

class Footer extends Component{
    render(){
        return (
            <p>
                Show: {" "}
                <FilterLink filter="SHOW_ALL">All</FilterLink>
                {", "}
                <FilterLink filter="SHOW_ACTIVE">Show active</FilterLink>
                {", "}
                <FilterLink filter="SHOW_COMPLETED">Show completed</FilterLink>
                {", "}
            </p>
        )
    }
}

export default Footer;