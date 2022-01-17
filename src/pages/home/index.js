import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {actionCreators} from './store'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className = 'banner-img' src = {require('/Users/elacutehoterku/Desktop/REACT-APP/src/statics/65D47DAAC9DF41201AF806330F21CC11.png')} alt = ''/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    }
})

export default connect(null, mapDispatch)(Home);