/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import * as React from 'react'
import RegisterForm from "../../../js/pages/register/register.form";
import { render } from '@testing-library/react';

describe('Register Form', () => {
    it('Should render without crash', () => {
        render (
            <RegisterForm />
        )
    })
})