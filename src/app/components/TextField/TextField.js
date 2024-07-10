"use client";

import "./TextField.css"

const InputText = (props) => {
    
    const placeholderModified = `${props.placeholder}...` 

    const whenTyping = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={whenTyping} required={props.required} placeholder={placeholderModified}></input>
        </div>
    )
}

export default InputText