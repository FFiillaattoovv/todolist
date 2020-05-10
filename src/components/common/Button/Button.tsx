import React from "react";
import styles from "./Button.module.css"

type PropsType = {
    text: string
    type?: "default" | "success" | "danger" | "info"
}

function Button(props: PropsType) {
    let css = "";

    if (props.type === "danger") {
        css = styles.danger
    }
    if (props.type === "success") {
        css = styles.success
    }
    if (props.type === "info") {
        css = styles.info
    }
    return (
        <input className={styles.button + " " + css} type="button" value={props.text}/>
    )
}

export default Button;