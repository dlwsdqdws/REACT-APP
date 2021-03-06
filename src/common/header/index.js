import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as headeractionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";


class Header extends Component {

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 10; i < Math.min(newList.length, page * 10); i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Hot
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => { this.spinIcon = icon }} className={'iconfont spin'}>&#xe851;</span>
                            Change
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    {
                        login ?
                            <NavItem onClick={logout} className='right logout'>Logout</NavItem> :
                            <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
                    }
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe617;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to = '/write'>
                        <Button className='writing'>
                            <span className="iconfont">&#xe600;</span>
                            Post
                        </Button>
                    </Link>
                    <Button className='reg'>Sign up</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(headeractionCreators.getList());
            dispatch(headeractionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(headeractionCreators.searchBlur());
        },

        handleMouseEnter() {
            dispatch(headeractionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(headeractionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage, spin) {
            let orginAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (orginAngle) {
                orginAngle = parseInt(orginAngle, 10);
            } else {
                orginAngle = 0;
            }
            spin.style.transform = 'rotate(' + (orginAngle + 360) + 'deg)';
            if (page < totalPage) {
                dispatch(headeractionCreators.changePage(page + 1));
            } else {
                dispatch(headeractionCreators.changePage(1));
            }
        },

        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);