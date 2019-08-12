import React, { Component } from 'react';
import './style.scss';

class TabBar extends Component {
    constructor(){
        super();
        this.state = {
            iconindex:0,
        }
    }
    render() {
        const tabs=[
            {id:1,title:'首页',path:'/home',icon:"icon-homepage",selecticon:"icon-homepage_fill"},
            {id:2,title:'菜单',path:'/menu',icon:"icon-createtask",selecticon:"icon-createtask_fill"},
            {id:3,title:'时光',path:'/time',icon:"icon-integral",selecticon:"icon-integral_fill"},
            {id:4,title:'取茶',path:'/order',icon:"icon-service",selecticon:"icon-service_fill"},
            {id:5,title:'我的',path:'/mine',icon:"icon-add",selecticon:"icon-addressbook_fill"},
        ]
        let {iconindex} = this.state;
        return (
            
            <nav className="tab-bar border-top">
                {
                    tabs.map((item,index)=>{
                        return(
                            // <NavLink 
                            // key={item.id} 
                            // to={item.path}
                            // className="tab-item"
                            // >
                            //     <span className={'iconfont'+}></span>
                            //     <span>{item.title}</span>
                            // </NavLink>

                            <li  key={item.id} 
                            className="tab-item" 
                            onClick={()=>this.changeTab(index,item.path)}>

                                <span className={'iconfont ' + ((iconindex===index)?item.selecticon:item.icon)}></span>
                                <span>{item.title}</span>

                            </li>
                                
                        )
                    })
                }
            </nav>
        );
    }
    changeTab=(index,path)=>{
        this.setState({iconindex:index});
        this.props.history.push(path);
    }
}


export default TabBar