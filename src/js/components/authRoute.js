import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component, path, exact, ...props }) => {
    const Component = component;
    const isLogged = useAuth();

    if (!isLogged)
        return <Redirect to='/login' />

    return <Route exact={exact} path={path} render={() => <Component {...props} />} />; 
}

const useAuth = () => {
    const auth = useSelector(state => state.auth.values);
    return auth !== null;
}

export { AuthRoute, useAuth };