import React, {Component, Fragment} from 'react';

class TodoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render(){
        return (
            <Fragment>
                <div>
                    <input 
                    value = {this.state.inputValue}
                    onChange = {this.handleInputChage.bind(this)}
                     />
                    <button>submit</button>
                </div>
                <ul>
                    <li>Learning REACT</li>
                    <li>Learning English</li>
                </ul>
            </Fragment>
        )
    }

    handleInputChage(e) {
        this.setState({
            inputValue : e.target.value
        })
    }
}

export default TodoList;