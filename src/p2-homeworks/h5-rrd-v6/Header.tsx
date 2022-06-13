import React from 'react'
import {NavLink} from "react-router-dom";
import stl from "./Header.module.css"

function Header() {
    return (
        <div className={stl.menu}>
            <div className={stl.wrapper}>
                <NavLink className={stl.menuItem} to='/pre-junior'>Pre-junior</NavLink>
                <NavLink className={stl.menuItem} to='/junior'>Junior</NavLink>
                <NavLink className={stl.menuItem} to='/junior+'>Junior+</NavLink>
                <div className={stl.square}></div>

            </div>
        </div>
    )
}

export default Header
