import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList : [{
        id : 1,
        title : 'USC',
        imgUrl : 'https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/USC-Shield.png'
    }, {
        id : 2,
        title : 'Viterbi',
        imgUrl : 'https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Main-USC-Viterbi-Logo-480x160-1.png'
    }],

    articleList : [{
        id : 1,
        title : 'Using Only 100 Atoms, Electric Fields Can Be Detected and Changed',
        desc : 'USC Viterbi researchers create first nano-sized, molecular device potentially capable of sensing and altering the cell’s electric field, ushering in new possibilities for basic research',
        imgUrl : "https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2022/01/Updated-Hompage-Slider-Image_Nanodevice.jpg"
    },{
        id : 2,
        title : 'USC Team Shows How Memories Are Stored in The Brain, With Potential Impact on Conditions Like PTSD',
        desc : 'Fish that glow; a tailor-made microscope; a new way to catalog science. After six years, researchers produce the first snapshots of memory in a living animal.',
        imgUrl : "https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2022/01/Untitled-1200-x-600-px.png"
    }],

    recommendList : [{
        id : 1,
        imgUrl : 'https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Main-USC-Viterbi-Logo-480x160-1.png'
    },{
        id : 2,
        imgUrl : 'https://16mhpx3atvadrnpip2kwi9or-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Main-USC-Viterbi-Logo-480x160-1.png'
    }],

    writterList : [{
        id : 1,
        name : "Lei Lu"
    },{
        id : 2,
        name : "Hapi Yu"
    },{
        id : 3,
        name : "Xiong Xiong"
    },{
        id : 4,
        name : "Ha Pi"
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}