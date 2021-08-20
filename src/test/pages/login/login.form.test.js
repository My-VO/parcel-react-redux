/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import * as React from 'react'
import LoginForm from "../../../js/pages/login/login.form";
import {Provider} from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { act } from 'react-dom/test-utils';
import configureStore from '../../../js/store/store';

const store = configureStore();
const fakeUserResponse = {token: 'fake_user_token'};
const server = setupServer(
  rest.post('/users/authenticate', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse))
  }),
);

beforeAll(() => server.listen());
afterEach(() => {
    server.resetHandlers()
})
afterAll(() => server.close());

describe('Login Form', () => {
    // Test d'intégration
    it('Should render without crash', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    });

    // Tests unitaires
    it('Render email input', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
        
        expect(screen.getByLabelText(/email/i));
        const inputEmail = screen.getByTestId("email-input");
        expect(inputEmail).toBeInTheDocument();
        expect(inputEmail).toHaveAttribute('type', 'email');

    });

    it('Pass valid email to test email input field', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
        
        const inputEmail = screen.getByTestId("email-input");
        const emailTest = "mail@test.com";
        userEvent.type(inputEmail, emailTest);

        expect(screen.getByTestId("email-input")).toHaveValue(emailTest);
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

    it('Render password input', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )

        expect(screen.getByLabelText(/password/i));
        const inputPassword = screen.getByTestId("password-input");
        expect(inputPassword).toBeInTheDocument();
        expect(inputPassword).toHaveAttribute('type', 'password');
    });

    it('Pass valid password to test password input field', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
        
        const inputPassword = screen.getByTestId("password-input");
        const passwordTest = "Azerty@123";
        userEvent.type(inputPassword, passwordTest);

        expect(screen.getByTestId("password-input")).toHaveValue(passwordTest);
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

    // Tests end-to-end
    it('Allows the user to login successfully', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: {value: 'user@gmail.com'}
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: {value: 'Azerty@123'},
        });

        // TODO: À corriger
        // act(() => {
        //     fireEvent.click(screen.getByText(/connecter/i))
        // })
    });
    
    it('Handles server exceptions', () => {
        // mock the server error response for this test suite only.
        server.use(
            rest.post('/users/authenticate', (req, res, ctx) => {
            return res(ctx.status(500), ctx.json({message: 'Internal server error'}))
            }),
        )
        
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )

        const exampleInput = screen.getByLabelText('Email Address')
        fireEvent.change(exampleInput, {
            target: {value: 'user@gmail.com'}
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: {value: 'Azerty@123'},
        });

        // TODO: À corriger
        // fireEvent.click(screen.getByText(/connecter/i))
    });
})