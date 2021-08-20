/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import * as React from 'react'
import Login from "../../../js/pages/login/login";
import {Provider} from 'react-redux';
import configureStore from '../../../js/store/store';
import { render } from '@testing-library/react';

const store = configureStore();

describe('Login', () => {
    it('Should render without crash', () => {
        render (
        <Provider store={store}>
            <Login />
        </Provider>
        )
    })
})