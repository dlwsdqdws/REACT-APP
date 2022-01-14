import { combineReducers } from "redux-immutable";
import {reducer as headerReducer} from "../common/header/store";
import {reducer as homeRuducer} from "../pages/home/store";

const reducer = combineReducers({
    header : headerReducer,
    home : homeRuducer

});

export default reducer;