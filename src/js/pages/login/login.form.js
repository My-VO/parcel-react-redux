import React, { useState } from 'react';
import { useDispatch }  from 'react-redux';
import { useHistory } from 'react-router-dom';

import api from '../../shared/utils/api-url';

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

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {
        setErrors(null)
        e.preventDefault();     

        try {
            const result = await api.post('/users/authenticate', values);
            console.log('result : ', result);
            dispatch({
                type: "USER_SET",
                payload: result.data
            });
            history.push('/')
        } catch (error) {
            setErrors(error.response?.data?.message)
            dispatch({
                type: "USER_RESET"
            })
        }
    }

    return (
        <div>
            {errors && (<p data-testid="error-msg" style={{ color: 'red'}}>{errors}</p>)}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        data-testid="email-input"
                        type="email"
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        data-testid="password-input"
                        type="password"
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                        required
                    />
                </div>

                <button type="submit">ME CONNECTER</button>
            </form>
        </div>
    )
}

export default LoginForm;