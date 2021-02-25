import React from 'react'
import classes from './Button.module.css'

const Button = props => {
    return <button className={classes.button + ' ' + classes[props.type] + ' ' + classes[props.size]}
    onClick={props.onClick}
    >{props.title}</button>
}

export default Button