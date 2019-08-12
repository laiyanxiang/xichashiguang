import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import homeReducer from './module/home';
import menuReducer from './module/menu';
import cartReducer from './module/cart';
import thunk from 'redux-thunk';
const reducer = combineReducers({
    homeReducer,
    menuReducer,
    cartReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(

    applyMiddleware(thunk)
  ));

export default store;