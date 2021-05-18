import React from 'react';

function LoginForm() {
    return (
        <div>
            <form >
                <label htmlFor="email">
                    Email Address
                    <input
                    type="text"
                    // value={values.email}
                    // onChange={handleInputChange}
                    name="email"
                    id="email"
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
                    />
                </label>

                <button type="submit">ME CONNECTER</button>
            </form>
        </div>
    )
}

export default LoginForm;