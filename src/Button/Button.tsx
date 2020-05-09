import React from "react";
import styles from "./style.module.css"

function Button(props: any) {
    return (
        <input className={styles.button} type="button" value={props.text}/>
    )
}

export default Button;