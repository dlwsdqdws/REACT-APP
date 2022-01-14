import React, {Component} from 'react';
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
                    <img src = "src/statics/65D47DAAC9DF41201AF806330F21CC11.png"></img>
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;