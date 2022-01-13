import React from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  {actionCreators} from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style";

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className = 'left active'>Home</NavItem>
                <NavItem className = 'left'>Download App</NavItem>
                <NavItem className = 'right'>Login</NavItem>
                <NavItem className = 'right'>
                    <span className = "iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in = {props.focused}
                        timeout = {200}
                        classNames = "slide"
                    >
                        <NavSearch
                            className = {props.focused ? 'focused' : ''}
                            onFocus = {props.handleInputFocus}
                            onBlur = {props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className = 'writing'>
                    <span className = "iconfont">&#xe600;</span>
                    Post
                </Button>
                <Button className = 'reg'>Sign up</Button>
            </Addition>
        </HeaderWrapper>
    );
}


const mapStateToProps = (state) => {
    return {
        focused : state.header.get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },

        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);