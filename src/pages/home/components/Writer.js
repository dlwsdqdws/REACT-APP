import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { WriterWrapper, WriterItem } from '../style';

class Writer extends PureComponent {
    render() {
        
        const {list, numFilter} = this.props;

        return (
            <WriterWrapper>
                {
                    list.map((item) => {
                        return <WriterItem key = {item.get('id')}>
                            <img src = {item.get('imgUrl')} alt = ""/>
                            <div>
                                <div className = "name">{item.get('name')}</div>
                                <div className = "follow">+follow</div>
                            </div>
                            <p>
                                Post {' '}
                                {numFilter(item.get('writeNum'))} words ·{' '}
                                {numFilter(item.get('star'))}
                                {' '} stars
                            </p>
                        </WriterItem>
                    })
                }
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list : state.getIn(['home', 'writerList'])
})

const mapDispatch = (dispatch) => {
    return {
        numFilter(num) {
            if (num >= 1000){
                num = parseInt(num / 1000)
                num = num + 'k'
            }
            return num;
        }
    }
}

export default connect(mapState, mapDispatch)(Writer);