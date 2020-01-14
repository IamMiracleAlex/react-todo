import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={header_style}>
            <h1>
                My React Todo
            </h1>
            <Link style={style} to="/"> Home</Link> | <Link style={style} to="/about">About</Link>
        </header>
    )
}

const header_style = {
    background: '#333',
    textAlign: 'center',
    padding: '10px',
    color: '#fff'
}

let style = {
    color: '#fff',
    textDecoration: 'none'
}