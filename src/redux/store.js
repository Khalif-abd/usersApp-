import { createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import Auth from './reducers/Auth';
import {LoadSalons} from './reducers/LoadSalons';
import {GetFavoriteSalons} from './reducers/GetFavoritSalons'
import {GetFavoriteMasters} from './reducers/GetFavoriteMasters';

const reducer = combineReducers({Auth, LoadSalons, GetFavoriteSalons, GetFavoriteMasters })
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
