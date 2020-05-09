import React from "react";

function Button(props: any) {
    return (
        <input type="button" value={props.text}/>
    )
}

export default Button;