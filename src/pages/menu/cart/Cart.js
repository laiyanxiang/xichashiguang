import React, { Component } from 'react';
import Header from '../../../components/header/index';
import AppScroll from '../../../components/app-scroll/index';
import {connect} from 'react-redux';
import CartItem from './children/cartitem';
import './style.scss';

class Cart extends Component {

    constructor(props){
        super();
        this.state = {
            money:0
        }
    }
    render() {
        let back = <span className="header-left-btn iconfont icon-fanhui" onClick={this.handleBack}></span>
        let {data} = this.props;
        let money = data.map((item)=>{
            return item.count * item.price
        })
        let noElement = <div className="notea"><p>暂时没有商品</p></div>
        return (
            <div className="page subpage" id="cart">
                <Header title="购物车" leftBtn={back}  />
                <AppScroll className="container">
                <div className="teaList">
                    {
                        data.length === 0 ? noElement:data.map((item)=>{
                            return (<CartItem key={item.id} item={item}/>)
                        }      
                        )
                    }
                    
                </div>
                </AppScroll>
                <div className="allcount">
                    <strong>
                    {
                        data.length===0? 0: money.reduce(function(first,second){
                            return first + second
                        }) 
                    }
                   <span>元</span> 
                    </strong>
                </div>
            </div>
        );

    }
    // 返回
    handleBack = ()=>{
        this.props.history.goBack();
    }
}

const mapStateToProps  = (state,props)=>{
    return{
        data:state.cartReducer.teaDate
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);