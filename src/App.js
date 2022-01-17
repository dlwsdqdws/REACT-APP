import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/header';
import { GolbalIcon } from './statics/iconfont/iconfont';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <BrowserRouter>
                        <Header />
                        <GolbalIcon />
                        <Routes>
                            <Route path='/' exact element={<Home />}></Route>
                            <Route path='/detail' element={<Detail />}></Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;