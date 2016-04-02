import React,{Component} from 'react';

class Link extends Component{
    render(){
        var {active, children, onClick} = this.props;
        if(active){
            return <span>{children}</span>
        }
        return <a href="#" onClick={e=>{onClick(e)}}>{children}</a>
    }
}

export default Link;