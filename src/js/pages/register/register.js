import React from 'react';
import RegisterForm from './register.form'

const Register = () => {
    return (
        <div>
            <div>
                <h1>Créer un compte</h1>
            </div>
            <RegisterForm />
            <p>
            Vous avez déjà un compte ?
            <a href="/login"> Connectez-vous ici</a>
            </p>
        </div>
    )
}

export default Register;