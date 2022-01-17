import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './store'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
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
                {this.props.showScroll ? <BackTop onClick = {this.handleScrollTop}>BackTop</BackTop> : null}
            </HomeWrapper>
        )
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

    bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}


}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },

    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);