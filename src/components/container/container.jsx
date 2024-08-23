import React from "react";
import ContainerStyles from './container.module.css'

const Container = ({ children }) => {
    return (
        <div className={ContainerStyles["container"]}>
            {children}
        </div>
    )
}

export default Container