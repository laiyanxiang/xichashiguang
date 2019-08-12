// import React, { Component,PureComponent } from 'react';
import React from 'react';
import { connect } from 'react-redux';

//UI组件

// 方式1
// class ShopBar extends Component {
//     render() {
//         console.log('shopBar render...');
//         return (
//             <div className="shopBar border-bottom">
//                 <span>{this.props.shopBar}</span>
//                 <span className="iconfont icon-dizhiguanli"></span>
//             </div>
//         );
//     }
//     shouldComponentUpdate(nextProps, nextState){
//         // 判断props和state是否有变化，确定要不要更新组件
//     }
// }


// 方式2，用pureComponent，它里面含有shouldComponentUpdate方法
// class ShopBar extends PureComponent {
//     render() {
//         console.log('shopBar render...');
//         return (
//             <div className="shopBar border-bottom">
//                 <span>{this.props.shopBar}</span>
//                 <span className="iconfont icon-dizhiguanli"></span>
//             </div>
//         );
//     }
// }

// export default ShopBar;


// 方式3  利用react-redux中connect高阶组件，它内部提供了shouldComponentUpdate方法

const ShopBar = (props)=>{

        return (
            <div className="shopBar border-bottom">
                <span>{props.shopBar}</span>
                <span className="iconfont icon-dizhiguanli"></span>
            </div>
        );
}

export default connect()(ShopBar);