import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Registration from './User/Registration/Registration';
import { createRenderer } from 'react-dom/test-utils';
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act } from '@testing-library/react';

let container:any = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it ('RegisterTest', () => {
  act(() => {
    ReactDOM.render(<Registration />, container);
  });
  const usernameText = container.getById('username');
  const emailText = container.getById('email');
  const password1Text = container.getById('password1');
  const password2Text = container.getById('password2');

  expect(usernameText.text).toBe('');
  expect(emailText.text).toBe('');
  expect(password1Text.text).toBe('');
  expect(password2Text.text).toBe('');
})