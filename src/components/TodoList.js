import React from "react";
import TodoForm from "./TodoForm";
import DisplayToDolisted from "./DisplayTodoListed";


export default class TodoList extends React.Component {

    state = {
        ListedTodo: [],
        ShowTodo: 'all',
        MarkAsComplete: true,
    }


    addListedTodo = TodoListed => {
        // const newListedToDo = [TodoListed,...this.state.ListedTodo];
        this.setState({
            ListedTodo: [TodoListed,...this.state.ListedTodo]
        })
    }

    toggleCompleted = (id) => {
        this.setState({
            ListedTodo:this.state.ListedTodo.map(TodoListed => {
                if(TodoListed.id === id){
                    return {
                        // id: TodoListed.id,
                        // TodoName: TodoListed.TodoName,
                        ...TodoListed,
                        completeToDo: !TodoListed.completeToDo
                    };
                } else {
                    return TodoListed;
                }
            })
        })
    }

    buttonClickToShow = (string) => {
        this.setState({
            ShowTodo: string
        })
    }

    handledDeleteTodo = id => {
        this.setState({
            ListedTodo: this.state.ListedTodo.filter(TodoListed => TodoListed.id !== id)
        })
    }

    removeAllCompletedTodo = () => {
        this.setState({
            ListedTodo: this.state.ListedTodo.filter(TodoListed => !TodoListed.completeToDo)
        })
    }

    render(){
        let ListedTodo =[];

        if(this.state.ShowTodo === 'all') {
            ListedTodo = this.state.ListedTodo;
        } else if(this.state.ShowTodo === 'inProgress') {
            ListedTodo = this.state.ListedTodo.filter(TodoListed => !TodoListed.completeToDo);
        } else if(this.state.ShowTodo === 'completed') {
            ListedTodo = this.state.ListedTodo.filter(TodoListed => TodoListed.completeToDo);
        }

        return (
            <div>
                <TodoForm onSubmit={this.addListedTodo}/>

                <div style={{fontWeight: 'bold', fontSize: '15px', marginTop: "2.5%",marginBottom: "2.5%", borderBottom: "double"}}>
                    Number Of List To Do :   {this.state.ListedTodo.filter(TodoListed => !TodoListed.completeToDo).length}
                </div> 

                {/* <div>
                    <button 
                        style={{ fontSize: '15px', fontWeight: 'bold', height: '25px', width:'20%', borderRadius: '10px', backgroundColor: 'white'}}
                        onClick={() => this.buttonClickToShow('all')}> ALL </button>
                    <button 
                        style={{ fontSize: '15px', fontWeight: 'bold', height: '25px', width:'20%', borderRadius: '10px', backgroundColor: 'white', marginLeft: '50px', marginRight: '50px'}}
                        onClick={() => this.buttonClickToShow('inProgress')}> IN PROGRESS </button>
                    <button 
                        style={{ fontSize: '15px', fontWeight: 'bold', height: '25px', width:'20%', borderRadius: '10px', backgroundColor: 'white'}}
                        onClick={() => this.buttonClickToShow('completed')}> COMPLETED </button>
                </div> */}

                {/* {JSON.stringify(this.state.ListedTodo)} */}
                {ListedTodo.map(TodoListed => (
                // <div key={TodoListed.id}>{TodoListed.TodoName}</div>
                <DisplayToDolisted 
                    key={TodoListed.id} 
                    // text={TodoListed.TodoName}
                    TodoListed={TodoListed}
                    deleteTodo={()=> this.handledDeleteTodo(TodoListed.id)}
                    toggleCompleted={() => this.toggleCompleted(TodoListed.id)}
                />
                ))}

                {this.state.ListedTodo.some(TodoListed => TodoListed.completeToDo) ? (
                    <div>
                        <button 
                            style={{ fontSize: '15px', fontWeight: 'bold', height: '25px', width:'20%', borderRadius: '10px', backgroundColor: 'white', marginTop: "2.5%"}}
                            onClick={this.removeAllCompletedTodo}> Remove Completed To Do </button>
                    </div>
                ) : null}

                {/* <div 
                    onClick={() => this.setState({
                        ListedTodo: this.state.ListedTodo.map(TodoListed => ({
                            ...TodoListed,
                            completeToDo: this.state.MarkAsComplete
                        })),
                        MarkAsComplete: !this.state.MarkAsComplete
                    })}>
                    <button > MARK ALL TO DO AS COMPLETED : {`${this.state.MarkAsComplete}`} </button>
                </div> */}
                
            </div>
        )
    }
}