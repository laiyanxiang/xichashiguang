import api from '../../request/api';
import {get} from '../../request/index';

const SET_MENU_NAV = 'menu/set_menu_nav';
const SET_MENU_LIST = 'menu/set_menu_list';

const initialState = {
    menuNav:[],
    menuList:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case SET_MENU_NAV:
            
           return {
               ...state,
               menuNav:action.menuNav
           }
        case SET_MENU_LIST:
            
           return {
               ...state,
               menuList:action.menuList
           }
    
        default:
            return state;
    }
}



const setMenuNav = (value)=>{
    return {

        type:SET_MENU_NAV,
        menuNav:value
    }
}
    

const setMenuList = (value)=>{
    return {
        type:SET_MENU_LIST,
        menuList:value
    }
}
    


export const requestMuneDate =  ()=> {
    
    return async (dispatch)=>{
        let menuNav = [], menuList = [];
        let result = await get(api.MENU_LIST);
        result.data.forEach((item,index)=>{
        menuNav.push({id:item.tag,name:item.categoryName});
        menuList.push({id:item.tag,name:item.categoryName,list:item.spuList})
        })

        dispatch(setMenuNav(menuNav));
        dispatch(setMenuList(menuList));
    }
}