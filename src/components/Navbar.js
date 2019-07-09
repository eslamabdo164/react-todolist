import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <div className='navbar'>
            <h1>Todo App </h1>
            <Link style={linkStyle} to="/"> Home </Link> | <Link style={linkStyle} to='/about'>About</Link>
         </div>
    )
}


const linkStyle = {
    color : '#111',
    textDecoration : 'none' 
}