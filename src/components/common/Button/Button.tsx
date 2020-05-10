import React from "react";
import styles from "./Button.module.css"

type PropsType = {
    text: string
}

function Button(props: PropsType) {
    return (
        <input className={styles.button} type="button" value={props.text}/>
    )
}

export default Button;