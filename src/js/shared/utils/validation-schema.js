import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .required('Email required !')
        .email('Invalid email address !'),
    password: Yup
        .string()
        .required('Password is required')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),      
    passwordConfirmation: Yup
        .string()
        .required('Password confirmation is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default ValidationSchema;