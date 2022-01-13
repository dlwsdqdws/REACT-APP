import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import {GolbalIcon} from './statics/iconfont/iconfont';
import store from './store';

class App extends Component{
    render() {
        return (
            <Provider store = {store}>
                <Header />
                <GolbalIcon />
            </Provider>
        );
    }
}

export default App;