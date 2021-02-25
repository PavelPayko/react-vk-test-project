import React from 'react'
import classes from './Header.module.css'

const Header = props => {
    return <header className="App-header">
        {props.name ? <h2>Hi, {props.name}</h2> : null}
        {props.isAuth
            ? <button onClick={props.logout}>Log out</button>
            : <button onClick={props.login}>Log in</button>
        }

        <button onClick={props.getGroups}>getGroups</button>
    </header>
}

export default Header