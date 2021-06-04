import { fireEvent, screen} from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Registration from './User/Registration/Registration';

let container = null;

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
    render(<Registration />, container);
  });

  const username = document.querySelector('[data-testid=username]');

  expect(username.value).toBe('');
})