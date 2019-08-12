import {createStore,combineReducers,applyMiddleware} from 'redux';
import homeReducer from './module/home/index';
import thunk from 'redux-thunk';
const reducer = combineReducers({
    homeReducer,
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;