import api from '../../../request/api';
import {get} from '../../../request/index';
import type from './type';

const setBanner = (params)=>{
    return {
        type:type.SET_BANNER,
        value:params
    }
}
export const requestBannerDate = ()=>{
    return async (dispatch)=>{
        let result = await get(api.HOME_BANNER);
        let action = setBanner(result.data);
        dispatch(action);
    }
}