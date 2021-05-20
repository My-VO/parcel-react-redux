import React, { useEffect, useState } from 'react';
import api from '../../shared/utils/api-url'

function LoginForm() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [ errors, setErrors ] = useState(null)
    
    const handleInputChange = (ev) => {
        const { name, value } = ev.target;

        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        setErrors(null)
        e.preventDefault();     

        try {
            const result = await api.post('/users/authenticate', values)
            console.log('result : ', result)
            console.log('result.message : ', result.message)
        } catch (error) {
            setErrors(error.response.data.message)
        }
    }

    return (
        <div>
            {errors && (<p style={{ color: 'red'}}>{errors}</p>)}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                    <input
                    type="email"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"
                    id="email"
                    required
                    />
                </label>

                <label htmlFor="password">
                    Password
                    <input
                    type="password"
                    value={values.password}
                    onChange={handleInputChange}
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