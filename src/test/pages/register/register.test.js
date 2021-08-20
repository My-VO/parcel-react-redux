/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import * as React from 'react'
import Register from "../../../js/pages/register/register";
import { render } from '@testing-library/react';

describe('Register', () => {
    it('Should render without crash', () => {
        render (
            <Register />
        )
    })
})