import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from '../src/components/Navbar';
import waitForExpect from 'wait-for-expect';
import '@testing-library/jest-dom/extend-expect';

import { render, getByText } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('dark mode is firing', () => {
//   const { getByTestId } = render(<App/>)
//   const namesAppear = getTestById("athlete")
//   expect(namesAppear.textContent).toBe()
// })

// test("dark mode is firing" , () => {
//   const testDarkMode = 'Dark Mode is firing'
//   render(<Navbar>{testDarkMode}</Navbar>)
//   expect(screen.getByText(testDarkMode)).toBeNull()
// })

test("rendering properly", () => {
  render( <App />)
})