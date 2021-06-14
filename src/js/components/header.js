import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const title = useSelector(state => state.app.name)
    const userEmail = useSelector(state => state.auth?.values?.email)

    return (
        <header>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <span>{userEmail}</span>
            </div>
            <nav>
                <span>
                    <Link to='logout'>Logout</Link>
                </span>
            </nav>
        </header>
    )
}

export default Header;