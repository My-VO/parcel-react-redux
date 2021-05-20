import React from 'react';
import { useFormik } from 'formik';
import ValidationSchema from '../../shared/utils/validation-schema'

function RegisterForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: ValidationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
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
                <br />
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
                <br />
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
                <br />
                <button type="submit">CRÉER UN COMPTE</button>
            </form>
        </div>
    )
}

export default RegisterForm;