import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const title = useSelector(state => state.app.name)

    return (
        <header>
            <div>
                <h1>{title}</h1>
            </div>
            <nav>
                <span>
                    <Link to='/login'>Login</Link>
                </span>
                <span>
                    <Link to='register'>Register</Link>
                </span>
            </nav>
        </header>
    )
}

export default Header;