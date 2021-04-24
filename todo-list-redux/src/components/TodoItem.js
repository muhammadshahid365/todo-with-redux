import React from "react"

function TodoItem(props){
    let textStylye = props.item.completed ? 
        {textDecoration: "line-through", color: "lightgray"}: {}
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handler(props.item.id)}
            />
            <p style={textStylye}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem