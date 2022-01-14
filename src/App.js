import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './common/header';
import { GolbalIcon } from './statics/iconfont/iconfont';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <GolbalIcon />

                    <BrowserRouter>
                        <div>
                            <Routes path='/' exact component={Home}></Routes>
                            <Routes path='/detail' component={Detail}></Routes>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;