import styled from 'styled-components';
import logopic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    height : 58px;
    border-bottom: 1px solid #f0f0f0; 
`;

export const Logo = styled.a.attrs({
    href : '/'
})`
    position: absolute;
    top : 0;
    left : 0;
    display : block;
    width : 100px;
    height : 56px;
    background : url(${logopic});
    background-size : contain;
`;

export const Nav = styled.div`
    width : 960px;
    heght : 100%;
    padding-right : 70px;
    box-sizing : border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height : 56px;
    padding : 0 15px;
    font-size : 17px;
    color : #333;
    &.left {
        float : left;
    }
    &.right {
        float : right;
        color : #969696;
    }
    &.active {
        color : #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder : 'search'
})`
    width : 160px;
    height : 38px;
    board : none;
    padding : 0 20px;
    box-sizing : boder-box;
    margin-top : 9px;
    margin-left : 20px;
    outline : none;
    border-radius : 19px;
    background : #eee;
    font-size : 14px;
    &::placeholder{
        color: #999
    }
`;

export const Addition = styled.div`
    position : absolute;
    right : 0;
    top : 0;
    height : 56px;
`;

export const Button = styled.div`
    float : right;
    line-height : 38px;
    margin-top : 9px;
    margin-right : 20px;
    padding : 0 20px;
    border-radius : 19px;
    border : 1px solid #ec6149;
    font-size : 14px;
    &.reg {
        color : #ec6149;
    }
    &.writing {
        color : #fff;
        background : #ec6149;
    }
`;
