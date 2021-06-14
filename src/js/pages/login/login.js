import React from 'react';
import LoginForm from './login.form'

const Login = () => {
    return (
        <>
          <div className="container">
            <div>
              <h1>Me connecter</h1>
            </div>
            <LoginForm />
  
            <p>
              Vous n'avez pas de compte ?
              <a href="/register"> Créer un compte</a>
            </p>
          </div>
        </>
    );
}

export default Login;