import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.menu}>
            <div className={s.item + ' ' + s.fire}>
                <NavLink to='/blog' className={({ isActive }) => (isActive ? s.active : '')}>Блог</NavLink>
            </div>
            <div className={s.item + ' ' + s.fire}>
                <NavLink to='/vk' className={({ isActive }) => (isActive ? s.active : '')}>ВКонтакте</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/' className={({ isActive }) => (isActive ? s.active : '')} >Instagram</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/youtube' className={({ isActive }) => (isActive ? s.active : '')}>YouTube</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/facebook' className={({ isActive }) => (isActive ? s.active : '')}>Facebook</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;