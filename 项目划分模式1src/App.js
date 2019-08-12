import React from 'react';
import Home from './pages/home/root/Home';
import Menu from './pages/menu/root/Menu';
import Time from './pages/time/root/Time';
import Order from './pages/order/root/Order';
import Mine from './pages/mine/root/Mine';
import NotFind from './pages/common/not-find/NotFind';

import Coupon from './pages/common/coupon/Coupon';
import Cart from './pages/menu/cart/Cart';
import OrderDetial from './pages/common/order-detail/OrderDetial';
import Comment from './pages/order/comment/Comment';
import ShopingList from "./pages/home/shoping-list/shopingList";

import TabBar from './components/tab-bar/Tab-bar';

import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div id="app">

      {/* 根路由 */}
      <Switch>
      <Route exact path="/" render={()=><Redirect  to="/home"/>} />
      <Route path="/home" component={Home}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/time" component={Time}/>
      <Route path="/order" component={Order}/>
      <Route path="/mine" component={Mine}/>
      <Route path="/404" component={NotFind}/>
      <Route render={()=><Redirect to="/404"/>}/>
      </Switch>

      {/* 首页的子页面 */}
      {/* 优惠券 */}
      <Route path="/home/coupon" component={Coupon}/>  
      {/* 店铺列表   */}
      <Route path="/home/shopinglist" component={ShopingList} />


      {/* 菜单的子页面 */}
      <Route path="/menu/cart" component={Cart}/>
      <Route path="/menu/confirm" component={OrderDetial}/>
      {/* 取茶的子页面 */}
      <Route path="/order/detail/:id" component={OrderDetial}/>
      <Route path="/order/comment/:id" component={Comment}/>

      {/* 我的子页面 */}
      <Route path="/mine/coupon" component={Coupon}/>



      <Route component={TabBar}/>
      
    </div>
    </Router>
  );
}

export default App;
