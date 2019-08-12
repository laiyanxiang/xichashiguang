import React,{Component} from 'react';
import BScroll from 'better-scroll'
import './style.scss'

class AppScroll extends Component {
    wrapper = React.createRef();
    render(){
        return(
            <div className={"scroll-wrapper " + this.props.className} ref={this.wrapper}>
                <div className="scroll-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
    componentDidMount(){ 
        // 当用户一点击屏幕就更新scoll的计算值
        // 将scroll这个视图添加到这个组件的内部，使得当使用ref时可以访问到scroll这个视图
        let scroll = this.scrollView = new BScroll(this.wrapper.current,{
            probeType:this.props.onScrol?1:3
        });
        //on是better-scroll中的促发事件的方法，beforeScrollStart 是scroll的事件名称，该事件是在触发滚动之前的
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        })
        
        if(this.props.onScroll){
           scroll.on('scroll',()=>{
               this.props.onScroll(scroll.y);
           })
           
        }
        
    }

    ScrollTo= (y)=>{ // y是Menulist组件传过来的要滚动距离
        if(y < this.scrollView.maxScrollY){ //判断要滚动的距离是否大于scroll可滚动的最大距离，如果是将最大距离给要滚动的距离
            y = this.scrollView.maxScrollY;
        }
        this.scrollView.scrollTo(0,y,1000);  // scrollTo是better-scroll提供的一个方，滚动到指定的位置
    }
}

export default AppScroll;