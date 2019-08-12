import api from '../../request/api';
import {get} from '../../request/index';

//type
const SET_BANNER = "home/set-banner";


//初始值
const initialState = {
    title:'首页',
    banner:[],
    shopBar:'壹方城店'
}

//reducer
export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_BANNER:
            return {
                ...state,
                banner:action.value
            }
        default:
            return state;
    }
    
}

 

//同步action
const setBanner = (params)=>{
    return {
        type:SET_BANNER,
        value:params
    }
}

//异步action
export const requestBannerDate = ()=>{
    return async (dispatch)=>{
        let {data} = await get(api.HOME_BANNER);
        let action = setBanner(data);
        dispatch(action);
    }
}