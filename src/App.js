import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';  
import CacheRoute,{CacheSwitch} from 'react-router-cache-route';  //用于缓存组件的工具，相当于vue中keep-alive内置组件

// 公共部分
import TabBar from './components/tab-bar/Tab-bar';
import Loading from './components/loading/Loading';


// 根页面
const Home = lazy(()=>import('./pages/home/root/Home'));
const Menu = lazy(()=>import('./pages/menu/root/Menu'));
const Time = lazy(()=>import('./pages/time/root/Time'));
const Order = lazy(()=>import('./pages/order/root/Order'));
const Mine = lazy(()=>import('./pages/mine/root/Mine'));
const NotFind = lazy(()=>import('./pages/common/not-find/NotFind'));

// 子页面
const Coupon = lazy(()=>import('./pages/common/coupon/Coupon'))
const Cart = lazy(()=>import('./pages/menu/cart/Cart'))
const OrderDetial = lazy(()=>import('./pages/common/order-detail/OrderDetial'))
const Comment = lazy(()=>import('./pages/order/comment/Comment'))
const ShopingList = lazy(()=>import("./pages/home/shoping-list/shopingList"))






function App() {
  return (
    <Router>
        <div id="app">

    
      
      <Suspense fallback={<Loading/>}>  {/*懒加载 */}
          {/* 根路由 */}
          <CacheSwitch>  {/* 将Switch改成CacheSwich */}
          <Route exact path="/" render={()=><Redirect  to="/home"/>} />
          <CacheRoute path="/home" component={Home}/>  {/*将需要缓存的组件 将Route替换成CacheRoute，不需缓存的不替换 */}
          <CacheRoute path="/menu" component={Menu}/>
          <CacheRoute path="/time/:flag" component={Time}/>
          <CacheRoute path="/order" component={Order}/>
          <CacheRoute path="/mine" component={Mine}/>
          <Route path="/404" component={NotFind}/>
          <Route render={()=><Redirect to="/404"/>}/>
          </CacheSwitch>



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

      </Suspense>
      
      <Route component={TabBar}/>
      
    </div>
    </Router>
  );
}

export default App;
