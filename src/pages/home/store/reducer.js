import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList : [{
        id : 1,
        title : 'USC',
        imgUrl : 'https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/USC-Shield.png'
    }, {
        id : 2,
        title : 'Viterbi',
        umgUrl : 'https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Main-USC-Viterbi-Logo-480x160-1.png'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}