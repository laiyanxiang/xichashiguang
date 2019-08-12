import React, { Component,createRef} from 'react';


//UI组件
class Banner extends Component {
    constructor(){
        super();
        this.container = createRef();
    }
    render() {
        
        return (
            <div className="banner swiper-container " ref={this.container}>
                <div className="swiper-wrapper">
                    
                    {
                        this.props.data.map((item)=>{
                            return (

                                <div className="swiper-slide"
                                key={item.id}>
                                    <img src={item.imgpath} alt=""/>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
    componentDidMount(){

        //因为作用域的问题访问不到swiper，加上window就可以访问到
        this.swiper = new  window.Swiper (this.container.current, {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplay : 2000,
            autoplayDisableOnInteraction : false,
        })        
    }
    componentDidUpdate(oldProps){
        if(this.props.data !== oldProps.data){
            this.swiper.update();  //updata 是swiper中的方法，重新更新
            this.swiper.reLoop();  //重新计算slide个数，
            this.swiper.slideTo(1,0); //切换到指定的slide
        }
    }
    componentWillUnmount(){
        if(this.swiper){
            this.swiper.destroy();
        }
    }

}

export default Banner;