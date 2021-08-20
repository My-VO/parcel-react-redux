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

// Test integration: Login Form
describe('Login Form', () => {
    // Test unitaire
    it('Should render without crash', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    });

    // Test unitaire
    it('Render email input', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
        
        // Test unitaire
        expect(screen.getByLabelText(/email/i));
        // Test unitaire
        const inputEmail = screen.getByTestId("email-input");
        expect(inputEmail).toBeInTheDocument();
        // Test unitaire
        expect(inputEmail).toHaveAttribute('type', 'email');

    });

    // Test unitaire
    it('Pass valid email to test email input field', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
        
        const inputEmail = screen.getByTestId("email-input");
        const emailTest = "mail@test.com";
        userEvent.type(inputEmail, emailTest);

        // Test unitaire
        expect(screen.getByTestId("email-input")).toHaveValue(emailTest);
        // Test unitaire
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

    // Test unitaire
    it('Render password input', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )

        // Test unitaire
        expect(screen.getByLabelText(/password/i));
        // Test unitaire
        const inputPassword = screen.getByTestId("password-input");
        expect(inputPassword).toBeInTheDocument();
        // Test unitaire
        expect(inputPassword).toHaveAttribute('type', 'password');
    });

    // Test unitaire
    it('Pass valid password to test password input field', () => {
        render (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
        
        const inputPassword = screen.getByTestId("password-input");
        const passwordTest = "Azerty@123";
        userEvent.type(inputPassword, passwordTest);
        
        // Test unitaire
        expect(screen.getByTestId("password-input")).toHaveValue(passwordTest);
        // Test unitaire
        expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

    // Test unitaire
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
    
    // Test unitaire
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