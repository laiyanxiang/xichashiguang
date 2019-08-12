import React, { Component } from 'react';
import {connect} from 'react-redux';
import {requestBannerDate} from '../../../store/module/home';
import Banner from './children/Banner';
import ShopBar from './children/ShopBar';
import List from './children/List';
import "./style.scss";
import AppScroll from '../../../components/app-scroll'
import Header from '../../../components/header/index';

//容器组件
class Home extends Component {
    
    render() {
        let {banner,shopBar} = this.props;
        return (
            <div className="page" id="home">
                <Header title="喜茶时光"/>
                <AppScroll className="container">
                    <Banner data={banner}/>
                    <ShopBar shopBar={shopBar}/>
                    <List/>
                </AppScroll>
            </div>
        );
    }
    componentDidMount(){
    // 将数据请求交给store处理
    this.props.getBannerDate();


    //    let result =  get(api.HOME_BANNER);
    //    console.log(result); //返回一个promise
    //    result.then((res)=>{ 
    //        console.log(res); //返回pormise中的数据
    //    })


    }
}

const mapStateTopProps = (state,props)=>{
    return {
        title:state.homeReducer.title,
        banner:state.homeReducer.banner,
        shopBar:state.homeReducer.shopBar
    }
}

const mapDispatchToProps = (dispatch,props)=>({
    getBannerDate(){
        //注意 因为requestBannerDate这个函数返回的函数才进行了异步请求，所以在它后面要加（），表示执行，只有执行了函数才会返回里面的那个函数
        let action = requestBannerDate(); 
        dispatch(action);
    }
})

export default connect(mapStateTopProps,mapDispatchToProps)(Home);