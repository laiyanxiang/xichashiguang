import React from 'react';
import AppScroll from '../../../../components/app-scroll/index';
export default (props)=>{
    return(
            <div className="nav">
            <AppScroll className="container">
            <ul>
                {
                    props.menuNav.map((item,index)=>{
                        return(
                            <li 
                            key={item.id}
                            className={ "navlist border-bottom "+ (props.selectIndex === index? "active":"")}
                            onClick = {()=>props.onChange(index,'nav')}>
                            {item.name}</li>
                        )
                    })
                }
            </ul>
        </AppScroll>
        </div>
    )
}