import React, { Component } from 'react';
import "./style.scss";
import {connect} from 'react-redux';
import {requestBannerDate} from '../../../store/module/home/actions'


class Home extends Component {
    
    render() {
        console.log(this.props.banner);
        return (
            <div className="page" id="home">
                <h1>{this.props.title}</h1>
                <div className="home-banner">
                    {
                        this.props.banner.map((item,index)=>{
                            return(<img key={item.id} src={item.imgpath} />)
                        })
                    }
                </div>
                
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