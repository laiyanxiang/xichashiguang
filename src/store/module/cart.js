
const GET_TEADATE = '/menu/cart/get_teadate'
const MODIFY_TEADATE = '/menu/cart/modify_teadate'
const DELETE_TEADATE = '/menu/cart/delete_teadate'
const initialState = {
    teaDate:[],
    money:0
}


export default (state = initialState,action)=>{
    switch (action.type) {
        case GET_TEADATE:
            let infoIndex = state.teaDate.findIndex((item)=>{
                return item.id === action.value.id   
            })

            if(infoIndex > -1){
                let data = state.teaDate.map((item,i)=>{
                    if(i === infoIndex){
                        return {
                                ...item,
                                count:item.count +1
                        }
                    }else{
                        return item
                    }
                })

                return {
                    ...state,
                    teaDate:data,

                }

            }else{
                let teaInfo = {
                    ...action.value,
                    count:1
                }
                let data = [...state.teaDate,teaInfo]

                return {
                    ...state,
                    teaDate:data,
                    
                    
                }
            }
        
        case MODIFY_TEADATE:
                let Index = state.teaDate.findIndex((item)=>{
                    return item.id === action.value.id
                    
                })
                let data = state.teaDate.map((item,index)=>{
                    if(index === Index){
                        return {
                                ...item,
                                count:item.count + (action.value.flag === 'add' ? 1 : -1)
                        }
                    }else{
                        return item
                    }
                })
                 
                return {
                    ...state,
                    teaDate:data
                }
        case DELETE_TEADATE:
            let j = state.teaDate.findIndex((item)=>{
                return item.id === action.value.id;
            }) 
            let newArr = state.teaDate.filter((item,i)=>{
                return j !== i;
            })
            return {
                ...state,
                teaDate:newArr
            }
        default:
            return state
    }
}

// 同步action

export const getTeaDate = (prams)=>{
    return {
        type: GET_TEADATE,
        value:prams  //整件商品
    }
}

export const modifyTeaDate = (prams)=>({
    type:MODIFY_TEADATE,
    value:prams  // 一个对象
})

export const deleteTeaDate = (prams)=>({
    type:DELETE_TEADATE,
    value:prams  //商品id
})