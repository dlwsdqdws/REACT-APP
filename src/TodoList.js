import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axois from 'axios';
import './style.css';

class TodoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChage = this.handleInputChage.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render(){
        return (
            <Fragment>
                <div>
                    <lable htmlFor = "insertArea">
                        Input Targets
                    </lable>
                    {/* input box */}
                    <input 
                    id = "insertArea"
                    className = 'input'
                    value = {this.state.inputValue}
                    onChange = {this.handleInputChage}
                    // ref = {(input) => (this.input = input)}
                     />
                    {/* submit bottom */}
                    <button onClick = {this.handleBtnClick}>
                        submit
                    </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() { 
        return this.state.list.map((item, index) => {
            return (
                <TodoItem 
                key = {item}
                content = {item} 
                index = {index} 
                deleteItem = {this.handleItemDelete}
                />
            // <li 
            //     key = {index} 
            //     onClick = {this.handleItemDelete.bind(this, index)}
            //     dangerouslySetInnerHTML = {{__html: item}}
            // >
            // </li>
            )
        })
    }

    componentDidMount() {
        axois.get('http://localhost.charlesproxy.com:3000/api/todolist')
        .then((res) => {
            // console.log(res.data);
            this.setState(() => ({
                list : [...res.data]
            }));
        })
        .catch(() => {alert('error');})
    }

    handleInputChage(e) {
        const value = e.target.value; 
        this.setState(() => ({
            inputValue : value
        }))
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list : [...prevState.list, prevState.inputValue],
            inputValue : ''
        }))
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];  //copy this.state.list
            list.splice(index, 1);
            return {list}
        })
    }
}

export default TodoList;