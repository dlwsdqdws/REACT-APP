import React, {Component} from 'react';
import {connect} from 'react-redux';
import { WriterWrapper, WriterItem } from '../style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                {
                    this.props.name.map((item) => {
                        return <WriterItem key = {item.get('id')}>{item.get('name')}</WriterItem>
                    })
                }
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    name : state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer);