import React,{Component} from 'react';
import "./style.scss";

class Header extends Component{
    
    render(){
        return(
            <header className="header border-bottom">
                {this.props.leftBtn}
                <span className="title">{this.props.title}</span>
                {this.props.rightBtn}
            </header>
        )
    }
}

export default Header