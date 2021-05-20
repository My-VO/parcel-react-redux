import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthRoute } from './components/authRoute';
import Layout from './components/layout';
import Login from './pages/login/login';
import Logout from './pages/logout';
import Home from './pages/home';
import Books from './pages/books';
import Register from './pages/register/register';

import '../assets/sass/App.scss';

import api from './shared/utils/api-url';

const App = () => {
    const dispatch = useDispatch();
    const appState = useSelector(state => state.app)

    useEffect(async() => {
        dispatch({type: "APP_INIT"});
        dispatch({type: "USER_FETCH"})

        try {
            const result = await api.get('/users/me');

            console.log(`result app`, result)
            dispatch({type: "USER_SET", payload: result.data})
        } catch(err) {
           // console.error('err : ', err);
            dispatch({type: "USER_RESET"})
        }

        dispatch({type: "APP_READY"})
    }, [])

    if (!appState.init) return <div>Loading...</div>

    return (
        <Router>
            <Switch>
                <Route exact path="/register" exact component={Register} />
                <Route exact path="/login" component={Login} />
                <AuthRoute exact path="/logout" exact component={Logout} />
                <Layout>
                    <AuthRoute exact path="/" exact component={Home} />
                    <AuthRoute exact path="/books" component={Books} />
                </Layout>
            </Switch>
        </Router>
    )
}

export default App;