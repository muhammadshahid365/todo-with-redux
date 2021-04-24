import { useState } from "react"
import React from "react"
import "./AddTodo.css"
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'



function AddTodo(props) {
    const [text, setText] = useState("");
    // console.log(state);

    return (
        <div className="add-todo">
            <div className="inner-div">
                <input
                    type="text"
                    id="text-input"
                    value={text} onChange={(e) => {
                        setText(e.target.value)
                    }} />

                
                <button
                    id="add-button"
                    onClick={() => {                        
                        if (text.trim() !== '') {
                            props.dispatch(addTodo(text));
                            setText("")
                        }
                    }}>
                    ADD
                </button>
            </div>
        </div>
    )
}

export default connect(null)(AddTodo)