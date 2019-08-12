import React, { Component } from 'react';
import "./style.scss";
class Coupon extends Component {
    render() {
        return (
            <div className="page subpage" id="coupon">
                <div className="couponlist">
                    <div className="coupon-one border">
                        <div className="coupon-text">
                            <h1>新用户优惠</h1>
                            <p>满20减五</p>
                        </div>
                        <div className="coupon-link">
                            <span>立即使用</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coupon;