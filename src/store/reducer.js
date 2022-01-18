import { combineReducers } from "redux-immutable";
import {reducer as headerReducer} from "../common/header/store";
import {reducer as homeRuducer} from "../pages/home/store";
import {reducer as detailReducer} from "../pages/detail/store";
import { reducer as loginReducer } from '../pages/login/store';


const reducer = combineReducers({
    header : headerReducer,
    home : homeRuducer,
    detail : detailReducer,
    login : loginReducer
});

export default reducer;