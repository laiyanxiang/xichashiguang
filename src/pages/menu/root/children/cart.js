import React from 'react';
import {connect} from 'react-redux'
import {getTeaDate} from '../../../../store/module/cart'


function Item(props) {
    let {item} = props;
    return(
        <li 
        key={item.tag}
        className="tealist border-bottom">
                <img src={item.imageUrl} alt=""/>
                <div className="text">
                    <p className="title">{item.name}</p>
                    <p className="desc">{item.desc}</p>
                    <p className="price">
                    {item.price+'元'}
                    <span className="buy" onClick={()=>props.addTea(item)}>
                        购买
                    </span>
                    </p>
                </div>
        </li>
    )
}

const mapStateToProps = (state,props)=>{
    return{
        
        // data: state.cartReducer.teaDate
    };
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        addTea(item){
            let action = getTeaDate(item);
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);