import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import ValidationSchema from '../../shared/utils/validation-schema';

import api from '../../shared/utils/api-url';

function RegisterForm() {    
    const [ errors, setErrors ] = useState(null);

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: ValidationSchema,
        onSubmit: async(values) => {
            setErrors(null);
            try {
                const result = await api.post('/users', {
                    email: values.email,
                    password: values.password
                })
                if (result) {
                    history.push('/login')
                }
            } catch (error) {
                setErrors(error.response.data.message)
            }
        }
    });

    return (
        <div>
            {errors && (<p style={{ color: 'red'}}>{errors}</p>)}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? <p style={{ color: 'red' }}>{formik.errors.email}</p> : null}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password ? <p style={{ color: 'red' }}>{formik.errors.password}</p> : null}
                </div>
                <div>
                    <label htmlFor="passwordConfirmation">Confirmation du mot de passe</label>
                    <input
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="password"
                        value={formik.values.passwordConfirmation}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? <p style={{ color: 'red' }}>{formik.errors.passwordConfirmation}</p> : null}
               </div>
                <button type="submit">CRÉER UN COMPTE</button>
            </form>
        </div>
    )
}

export default RegisterForm;