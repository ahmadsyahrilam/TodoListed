import React from "react";
import shortid from 'shortid';


export default class TodoForm extends React.Component{

    state = {
        TodoName: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            TodoName: this.state.TodoName,
            completeToDo: false
        });
        this.setState({
            TodoName: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    style={{ fontSize: '15px', height: '20px', width: '50%'}}
                    placeholder=" Please enter your List To Do " 
                    name="TodoName"
                    value={this.state.TodoName} 
                    onChange={this.handleChange}
                />

                <button 
                    style={{ fontSize: '15px', fontWeight: 'bold', height: '25px', width:'20%', borderRadius: '10px', backgroundColor: 'white', marginLeft: '50px'}}
                    onClick={this.handleSubmit}> Add To Do </button>

            </form>
        )
        
    }
}