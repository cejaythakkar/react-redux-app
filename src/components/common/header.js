import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="App-header">
            <nav>
                <ul className="nav">
                    <li className="nav-item"><Link to="/todos" className="nav-link">Todos</Link></li>
                    <li className="nav-item"><Link to="/users" className="nav-link">Users</Link></li>
                    <li className="nav-item"><Link to="/about"className="nav-link">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
