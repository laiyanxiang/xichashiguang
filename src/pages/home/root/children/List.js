import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const List = ()=>{

    let list = [
        {id:1,title:'立即购买',path:'/menu'},
        {id:2,title:'我的订单',path:'/order'},
        {id:3,title:'喜茶时光',path:'/time/time'},
        {id:4,title:'查看评价',path:'/time/comment'},
        {id:5,title:'我的优惠',path:'/mine/coupon'},
        {id:6,title:'我的优惠',path:'/mine/coupon'},
        {id:7,title:'我的优惠',path:'/mine/coupon'},
        {id:8,title:'我的优惠',path:'/mine/coupon'},
        {id:9,title:'我的优惠',path:'/mine/coupon'},
        {id:10,title:'我的优惠',path:'/mine/coupon'},
        {id:11,title:'我的优惠',path:'/mine/coupon'},
    ]
    return (
        <ul className="list">
            {
                list.map((item)=>(
                <Link key={item.id} 
                className="item border-bottom"
                to={item.path}>
                    <span>{item.title}</span>
                    <span className="iconfont icon-youjiantou"></span>
                </Link>
                ))
            }
        </ul>
    );
}

export default connect()(List);