import React,{Component} from 'react';
import {connect} from 'react-redux';
import {modifyTeaDate,deleteTeaDate} from '../../../../store/module/cart';


class CartItem extends Component{
    item = React.createRef();
    render(){
        let{item ,handleModify,handleDelete} = this.props;
        return (
            <div className="cart-item-wrap">
    
                <div className="cart-item-delete" onClick={()=>handleDelete(item.id)}>
                    <span className="iconfont icon-lajixiang"></span>
                </div>
                <div className="cartitem " ref={this.item}>
                    <div className="left">
                    <img src={item.imageUrl} alt=""/>
                    </div>
                    <div className="center">
                        <p>{item.name}</p>
                    </div>
                    <div className="right">
                        <span className="price">{item.price + '￥'}</span>
                        <div className="count">
                            <span 
                            className={"reduce " + (item.count === 1 ? 'disable':'')} 
                            onClick={ ()=>{
                                return item.count !==1 ? handleModify(item.id,'reduce'):''
                            }}
                            >-</span>
                            <span  >{item.count}</span>
                            <span 
                            className="add" 
                            onClick={()=>handleModify(item.id,'add')}>+</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){

        // 移除项
        this.TouchEvent();
        
    }

    TouchEvent = ()=>{
        let dom = this.item.current;
        let offsetX = 0;
        dom.addEventListener('touchstart',(ev)=>{
            //获取初始的位置
            let {clientX:startX} = ev.changedTouches[0]
            startX =  startX - offsetX;
            let move = (ev)=>{
                let {clientX} = ev.changedTouches[0];
                
                 offsetX = clientX - startX;
                if(offsetX >= -100){
                    dom.style.left = offsetX + 'px';
                }
                dom.className = 'cartitem '
            }
            let end = (ev)=>{
                if(offsetX <= -50){
                    dom.style.left = '-100px';
                }else{
                    dom.style.left = 0;
                }
                dom.className = 'cartitem active'
                dom.removeEventListener('touchmove',move);
                dom.removeEventListener('touchend',end);
            }
            dom.addEventListener('touchmove', move)
            dom.addEventListener('touchend',end)
        })
    }
}


const mapSateToProps = (state,props)=>{
    return{

    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        handleModify(id,flag){
            let action = modifyTeaDate({id,flag});
            dispatch(action);
        },
        handleDelete(id){
            let action = deleteTeaDate({id});
            dispatch(action)
        }
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(CartItem);