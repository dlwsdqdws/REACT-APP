import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List,} from 'antd';
import axois from 'axios';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        store.subscribe(() => {
            this.setState(store.getState())
        });
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    render() {
        return (
            <div style = {{marginTop : '10px', marginLeft : '10px'}}>
                <div>
                    <Input 
                        value = {this.state.inputValue} 
                        placeholder = 'todo info' 
                        style = {{width : '300px', marginRight : '10px'}} 
                        onChange = {this.handleInputChange}
                    />
                    <Button type="primary" onClick = {this.handleBtnClick} >Submit</Button>
                </div>
                <List
                    style = {{marginTop : '10px', width : '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick = {this.handleItemDelete.bind(this, index)}>
                        {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

    // componentDidMount() {
    //     axois.get('http://localhost.charlesproxy.com:3000/api/todolist')
    //     .then((res) => {
    //         // console.log(res.data);
    //         this.setState(() => ({
    //             list : [...res.data]
    //         }));
    //     })
    //     .catch(() => {alert('error');})
    // }

   

export default TodoList;