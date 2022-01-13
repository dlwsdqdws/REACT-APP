import React, {Component} from 'react';
import Header from './common/header';
import {GolbalIcon} from './statics/iconfont/iconfont';

class App extends Component{
    render() {
        return (
            <div>
                <Header />
                <GolbalIcon />
            </div>
        );
    }
}

export default App;