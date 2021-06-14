import React from 'react';
import Nav from './nav';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Nav />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;