import React, { useEffect } from 'react';
import api from '../../shared/utils/api-url'

function LoginForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            email: 'my@g.com',
            password: 'azerty',
        }

        const result = await api.post('/users/authenticate', body)
        // console.log('result : ', result)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                    <input
                    type="email"
                    // value={values.email}
                    // onChange={handleInputChange}
                    name="email"
                    id="email"
                    required
                    />
                </label>

                <label htmlFor="password">
                    Password
                    <input
                    type="password"
                    // value={values.password}
                    // onChange={handleInputChange}
                    name="password"
                    id="password"
                    required
                    />
                </label>

                <button type="submit">ME CONNECTER</button>
            </form>
        </div>
    )
}

export default LoginForm;