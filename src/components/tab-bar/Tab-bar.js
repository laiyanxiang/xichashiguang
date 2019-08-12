import React, { Component } from 'react';
import './style.scss';

class TabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }
    render() {
        const tabs=[
            {id:1,title:'首页',autopath:'/home',path:'/home',icon:"icon-homepage",selecticon:"icon-homepage_fill"},
            {id:2,title:'菜单',autopath:'/menu',path:'/menu',icon:"icon-createtask",selecticon:"icon-createtask_fill"},
            {id:3,title:'时光',autopath:'/time',path:'/time/time',icon:"icon-integral",selecticon:"icon-integral_fill"},
            {id:4,title:'取茶',autopath:'/order',path:'/order',icon:"icon-service",selecticon:"icon-service_fill"},
            {id:5,title:'我的',autopath:'/mine',path:'/mine',icon:"icon-add",selecticon:"icon-addressbook_fill"},
        ]
        // 根据当前路径是否和tabs中的默认路径是否匹配返回对应的下标
        let selectPath = tabs.findIndex((item)=>{  //findIndex是查找满足return中条件的下标
            return this.state.selectPath.startsWith(item.autopath);  //startsWith是判断开头字符串是否和括号中的匹配
        })
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

                                <span className={'iconfont ' + ((selectPath===index)?item.selecticon:item.icon)}></span>
                                <span>{item.title}</span>

                            </li>
                                
                        )
                    })
                }
            </nav>
        );
    }
    changeTab=(index,path)=>{
        this.props.history.push(path);
    }
    static getDerivedStateFromProps(props,state){  //生命周期方法的计算属性方法 它返回的值会合并到组件的state中，props是组件的props
        return {

            //将当前的地址取出 此时的props是路由渲染出的组件，它含有history，location，和match  ，localtion中带当前地址栏的地址
            selectPath:props.location.pathname
        }
    }

}


export default TabBar