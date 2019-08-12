import type from './type' 

const initialState = {
    title:'首页',
    banner:[]
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case type.SET_BANNER:
            return {
                ...state,
                banner:action.value
            }
        default:
            return state;
    }
    
}

export default reducer ;