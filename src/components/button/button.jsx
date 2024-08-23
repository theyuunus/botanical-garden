import React from "react";
import ButtonStyles from './button.module.css'

const Button = ({
    className,
    children = "button",
    type = "button",
    onClick,
    buttonType = "primary",
    ...props
}) => {
    return (
        <button
            className={`
                ${className} 
                ${ButtonStyles["button"]}
                ${buttonType === "primary" ? ButtonStyles["button-primary"] : ""}
                ${buttonType === "secondary" ? ButtonStyles["button-secondary"] : ""}  
                `}
            type={type}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button