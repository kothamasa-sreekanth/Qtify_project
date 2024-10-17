import React from "react";
import styles from "./Button.module.css";

function Button({title}) {
    return (
        <>
        <button className={styles.feedbackBtn}>{title}</button>
        </>
    )
}

export default Button;