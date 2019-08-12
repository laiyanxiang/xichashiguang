import React,{PureComponent} from 'react';
import AppScroll from '../../../../components/app-scroll/index';
import Item from './cart';


export default class MenuList extends PureComponent{
     listDom = [];
     scroll = React.createRef();
     
    render(){
        console.log('render');
        let {menuList} = this.props
        // 每一次render都清空listDom数组
        this.listDom = [];
        return(
            <div className="list">
            <AppScroll  ref={this.scroll} onScroll={this.handleChangeNav} className="container" >
            <div className="border-right">
                {
                    menuList.map((item)=>{
                        let dom = React.createRef();
                        // 将遍历出来的所有ul DOM对象push到listDom数组中
                        this.listDom.push(dom);
                        return(
                            <ul 
                            key={item.id}
                            className="listtitle border-bottom" 
                            ref={dom}>
                                <p className="title">{item.name}</p>
                                {
                                    item.list.map((item)=><Item key={item.id} item={item}/>)
                                }
                            </ul>
                        )
                    })
                }
            </div>
            </AppScroll>
            </div>
        )
    }

    // 根据滑动菜单列表改变nav的样式
    handleChangeNav= (y)=>{
        this.listDom.forEach(({current:dom},i)=>{
            let minY= 0;
            let maxY = 0;
            for(let j=0; j<i; j++){
                maxY -= this.listDom[j].current.offsetHeight;   
            }
            minY = maxY - this.listDom[i].current.offsetHeight;
            if(y>minY && y<=maxY){
               this.props.onChange(i,'list');
            }
        })
        
    }

    // 根据nav的点击滚动到指定位置
    ShouldMoveHeight = (selectIndex)=>{
        let height = 0;
        // 遍历lisDom数组
        for(let i=0; i < selectIndex; i++){
            height -= this.listDom[i].current.offsetHeight; //将所有小于该下标的dom的高度值相加，因为scroll是向y 轴的负轴 所以用减号
        }
        this.scroll.current.ScrollTo(height); //将得到的要滚动的距离传给scroll组件中的ScrollTo方法中，因为内部组件不能操作外部组件
        
    }
}