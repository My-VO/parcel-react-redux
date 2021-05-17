import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app)

    useEffect(() => {
        dispatch({type: "APP_INIT"})

        setTimeout(() => {
            dispatch({type: "APP_READY"})
        }, 2000)
    }, [])

    console.log(`APP global state`, appState)

    if (appState.loading) return <div>Loading...</div>

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default App;