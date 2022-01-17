import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList : [],
    articleList : [],
    recommendList : [],
    writerList : []
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList),
        writerList : fromJS(action.writerList)
	});
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        default:
            return state;
    }
}