import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {requestMuneDate} from  '../../../store/module/menu';
import MenuNav from './children/MenuNav';
import MenuList from './children/MenuList';
import Header from '../../../components/header/index';
import "./style.scss";
class Menu extends PureComponent {
    constructor(){
        super();
        this.state = {
            selectIndex : 0,
            flag:'nav'
        }
        this.navlist = React.createRef();
    }
    render() {
        let {menuNav,menuList} = this.props;
        let {selectIndex} = this.state;
        let cartBtn = <span className="header-right-btn iconfont icon-caigou" onClick={this.gotoCartPage}></span>
        return (
            <div className="page" id="menu">
                    <Header title="菜单" rightBtn={cartBtn}/>
                    <MenuNav menuNav={menuNav} selectIndex={selectIndex} onChange={this.changSelect}/>
                    <MenuList menuList={menuList} onChange={this.changSelect} ref={this.navlist} />
            </div>
            
        );
    }

    // 跳到购物车页面
    gotoCartPage =()=>{
        this.props.history.push('/menu/cart');
    } 

    // 改变选择的左侧nav小标
    changSelect = (index,flag)=>{
        // 在selectindex发生变化了才进行赋值，优化性能，在滚动是就不会因为state的变化执行render
        // (this.state.selectIndex !== index) && this.setState({selectIndex:index,falg});
        this.setState({selectIndex:index,flag:flag});
    }

    componentDidMount(){

        // 放送请求
        this.props.getMenuDate();
    }
    componentDidUpdate(oldProps,oldState){
     
        // 判断state中的selectIndex有没有发生变化，如果有，调用menuList组件中的方法 移动到指定的距离,当menuList组件滚动时不要执行下面的方法
        if((oldState.selectIndex !== this.state.selectIndex) && this.state.flag ==='nav'){
            
            this.navlist.current.ShouldMoveHeight(this.state.selectIndex);
        }
        
    }
}

const mapStateTopProps =(state,props)=>{
    return({
        menuNav:state.menuReducer.menuNav,
        menuList:state.menuReducer.menuList
    })
}
const mapDispatchToProps = (dispatch,props)=>{
    return({
        getMenuDate(){
            let action = requestMuneDate();
            dispatch(action);
        }
    })
}


export default connect(mapStateTopProps,mapDispatchToProps)(Menu);