import React from 'react'
import classes from './ContentBox.module.css'

const ContentBox = props => <div className={classes.wrapper}>{props.children}</div>

export default ContentBox