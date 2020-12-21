import React from "react";

export default props => (
    <div style={{ display:"flex", justifyContent: "center", fontSize: "15px", fontWeight: 'bold'}}>
        <table>
            <tr>
                <td style={{width:'50%', borderWidth: '2px'}}>
                    <div style={{ 
                            textDecoration: props.TodoListed.completeToDo ? "Line-through" : "", 
                            color: props.TodoListed.completeToDo ? "red" : "#000000"
                        }} 
                        onClick={props.toggleCompleted}
                    >

                    {props.TodoListed.TodoName}

                    </div>
                </td>
                <td style={{width:'10%'}}>
                    <button 
                        style={{marginLeft: '50px'}}
                        onClick={props.deleteTodo}> x </button>
                </td>
            </tr>
        </table>
    </div>
    
);