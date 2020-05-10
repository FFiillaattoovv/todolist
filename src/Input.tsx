import React from "react";

type PropsType = {
    placeholder: string
}

function Input(props: PropsType) {
    return (
        <input placeholder={props.placeholder}/>
    )
}

export default Input;