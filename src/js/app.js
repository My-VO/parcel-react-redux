import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/layout';
import Login from './pages/login/login';
import Home from './pages/home';
import Books from './pages/books';
import Register from './pages/register/register';

import '../assets/sass/App.scss'

const App = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app)

    useEffect(() => {
        dispatch({type: "APP_INIT"})

        setTimeout(() => {
            dispatch({type: "APP_READY"})
        }, 2000)
    }, [])

    if (appState.loading) return <div>Loading...</div>

    return (
        <Router>
            <Switch>
                <Route exact path="/register" exact component={Register} />
                <Route exact path="/login" component={Login} />
                <Layout>
                    <Route exact path="/" exact component={Home} />
                    <Route exact path="/books" component={Books} />
                </Layout>
            </Switch>
        </Router>
    )
}

export default App;