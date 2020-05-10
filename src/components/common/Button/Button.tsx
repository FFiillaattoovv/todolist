import React from "react";
import styles from "./Button.module.css"
import cn from "classnames";

type PropsType = {
    text: string
    type?: "default" | "success" | "danger" | "info"
}

function Button(props: PropsType) {

    let css = cn({
        [styles.button]: true,
        [styles.danger]: props.type === "danger",
        [styles.danger]: props.type === "success",
        [styles.danger]: props.type === "info",
    });
    return (
        <input className={css} type="button" value={props.text}/>
    )
}

export default Button;